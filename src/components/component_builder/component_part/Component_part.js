import './Component_part.css'
import addSvg from '../img/add.svg';

function Component_part() {
return (
<div className="Component_part">
    <p>part</p>
    <button >
        <img src={addSvg} alt="Add" />
    </button>
</div>
);
}

export default Component_part;