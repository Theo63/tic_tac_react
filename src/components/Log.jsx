export default function Log({turns}) {
    return <ol id = "log">
        {turns.map(turn => <li key={turns.indexOf(turn)}>{turn.player} played at row {turn.square.row}, col {turn.square.col}</li>)}
    </ol>
}