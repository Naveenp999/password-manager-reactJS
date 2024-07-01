import './index.css'

const colors = [
  '#7683cb',
  '#f59e0b',
  '#10b981',
  '#f97316',
  '#14b8a6',
  '#b91c1c',
  '#ffffff',
  '#0ea5e9',
  '#64748b',
]

const PasswordItem = props => {
  const {item, Show, deleteitem} = props
  const color = Math.floor(Math.random() * 10)
  const {id, url, name, passcode} = item
  const deleteItem = () => deleteitem(id)
  return (
    <li className="item-container">
      <div className="dp-names-container">
        <div className={`dp-container bg-${color}`}>
          <p className="dp-text">{name.charAt(0)}</p>
        </div>
        <div className="names-container">
          <p className="names-text">{url}</p>
          <p className="names-text">{name}</p>
          {Show ? (
            <p className="names-text">{passcode}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          )}
        </div>
      </div>
      <button
        className="delete-container"
        onClick={deleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
