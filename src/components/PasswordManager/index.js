import {v4 as uuidv4} from 'uuid'

import './index.css'

import {Component} from 'react'

import PasswordItem from '../PasswordItem'

const item = {
  website: '',
  username: '',
  password: '',
  show: false,
  search: '',
  usersList: [],
}

class PasswordManager extends Component {
  state = {...item}
  noPasswords = () => (
    <div className="image-container passwords-lobby-list">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="nopassword-icon"
      />
      <p className="text">No Passwords</p>
    </div>
  )

  passwordsExcists = () => {
    const {usersList, show, search} = this.state
    const newlist = usersList.filter(element =>
      element.passcode.toUpperCase().includes(search.toUpperCase()),
    )
    return (
      <ul className="list-container">
        {newlist.map(ele => (
          <PasswordItem
            key={ele.id}
            item={ele}
            Show={show}
            deleteitem={this.deleteItem}
          />
        ))}
      </ul>
    )
  }

  checklist = () => {
    const {usersList, search} = this.state
    const newlist = usersList.filter(element =>
      element.passcode.toUpperCase().includes(search.toUpperCase()),
    )
    return newlist.length > 0
  }

  deleteItem = number => {
    const {usersList} = this.state
    const newList = usersList.filter(element => element.id !== number)
    this.setState({usersList: newList})
  }

  websiteChange = event => this.setState({website: event.target.value})

  usernameChange = event => this.setState({username: event.target.value})

  passwordChange = event => this.setState({password: event.target.value})

  searchChange = event => this.setState({search: event.target.value})

  formSubmitted = event => {
    event.preventDefault()
    const {website, username, password, usersList} = this.state
    const newuser = {
      id: uuidv4(),
      url: website,
      name: username,
      passcode: password,
    }
    const newList = [...usersList, newuser]
    this.setState({usersList: newList, website: '', username: '', password: ''})
  }

  showPasswords = () => this.setState(prev => ({show: !prev.show}))

  render() {
    const {website, username, password, search, usersList} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <div className="initial-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
          </div>
          <div className="details-container">
            <div className="sub">
              <form className="userdetails-form" onSubmit={this.formSubmitted}>
                <h1 className="description">Add New Password</h1>
                <div className="horizantal">
                  <div className="icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="input-icon"
                    />
                  </div>
                  <input
                    className="input"
                    placeholder="Enter Website"
                    type="text"
                    value={website}
                    onChange={this.websiteChange}
                  />
                </div>
                <div className="horizantal">
                  <div className="icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="input-icon"
                    />
                  </div>
                  <input
                    className="input"
                    placeholder="Enter Username"
                    type="text"
                    value={username}
                    onChange={this.usernameChange}
                  />
                </div>
                <div className="horizantal">
                  <div className="icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="input-icon"
                    />
                  </div>
                  <input
                    className="input"
                    placeholder="Enter Password"
                    type="password"
                    value={password}
                    onChange={this.passwordChange}
                  />
                </div>
                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
              <div className="details-icon">
                <div className="icon-first">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                    alt="password manager"
                    className="password-manager"
                  />
                </div>
                <div className="icon-second">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                    alt="password manager"
                    className="password-manager"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="details-container">
            <div className="extra">
              <div className="password-count-search">
                <div className="password-count-container">
                  <h1 className="password-text text">Your passwords</h1>
                  <p className="count text">{usersList.length}</p>
                </div>
                <div className="search-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="input-icon"
                  />
                  <input
                    className="input search-input"
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={this.searchChange}
                  />
                </div>
              </div>
              <hr className="line" />
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="vehicle1"
                  value="show Passwords"
                  className="passwords-box"
                  onClick={this.showPasswords}
                />
                <label htmlFor="vehicle1" className="password-label">
                  show Passwords
                </label>
              </div>
              {this.checklist() ? this.passwordsExcists() : this.noPasswords()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
