export const GifItem = ({ title, url }) => {
    console.log(title, url);
    return (
    <div className="card">
        <img className="" src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
    )
}
