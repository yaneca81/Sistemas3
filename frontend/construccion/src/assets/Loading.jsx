export const Loading = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
            <g fill="none" stroke="#0368b1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                <path strokeDasharray="2 4" strokeDashoffset={6} d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9">
                    <animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"></animate>
                </path>
                <path strokeDasharray={32} strokeDashoffset={32} d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.4s" values="32;0"></animate>
                </path>
                <path strokeDasharray={12} strokeDashoffset={12} d="M12 8v7.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></animate>
                </path>
                <path strokeDasharray={8} strokeDashoffset={8} d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="8;0"></animate>
                </path>
            </g>
        </svg>
    )
}
