import './css/Todoitems.css'
import tick from './assets/tick.png'
import not_tick from './assets/not_tick.png'
import cr from './assets/cross.png'
const Todoitems = ({ no, display, text, fnsetTodos }) => {

    const deleteTodo = () => {
        let data = JSON.parse(localStorage.getItem("todos"))
        const updatedData = data.filter(item => item.no !== no);
        fnsetTodos(updatedData)
    }
    const toggle = () => {
        let data = JSON.parse(localStorage.getItem("todos"))
        for (let i = 0; i < data.length; i++) {
            if (data[i].no === no) {
                if (data[i].display === "") {
                    data[i].display = "line-through"
                }
                else {
                    data[i].display = ""
                }
                break;
            }

        }
        fnsetTodos(data)
    }


    return (
        <div className='Todoitems'>
            <div className={`Todoitems-container ${display}`} onClick={() => { toggle() }}>
                {display === "" ? <img src={not_tick} alt="" /> : <img src={tick} alt="" />}
                <div className="Todoitems-text">{text}</div>
            </div>
            <img className="Todoitems-crossicon" src={cr} onClick={() => { deleteTodo() }} alt="" />
        </div>
    )
}

export default Todoitems
