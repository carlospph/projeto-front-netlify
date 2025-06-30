import "./ItemFilter.css";

export function ItemFilter({ label, nameCategory}) {
  return (
    <div className="dflex-check">
        <input type="checkbox" name={nameCategory} id={label}/>
        <label htmlFor={label} className="label-filter">{label}</label>
    </div>
  );
}
