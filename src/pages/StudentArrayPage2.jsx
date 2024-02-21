import React, { useState } from 'react';

function StudentArrayPage2(props) {
    
    10.12345678.toFixed(2);

    const student = {
        id: 0,
        name: "",
        score: 0
    }

    const [ scoreData, setScoreData ] = useState({
        total: 0,
        avg: 0
    });


    return (
        <div>
            <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
                <tfoot>
                    <tr>
                        <th>총점</th>
                        <th colSpan={2}>{scoreData.total}</th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th colSpan={2}>{scoreData.avg}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StudentArrayPage2;