import React from "react"
import Badge from "./components/Badge"
import Badges from "./components/Badges"

function App() {


  const [initFormData, setInitFormData] = React.useState({
    fName: "",
    lName: "",
    email: "",
    birthPlace: "",
    phone: "",
    favoriteFood: "",
    comments: ""
  })

  const [formData, setformData] = React.useState(initFormData)
  

  function handleChange(event) {
    const {name, value} = event.target

    setformData(prevData => ({
      ...prevData,
      [name] : value
    }))
  }

  const [newData, setnewData] = React.useState([])

  function submitHandle(event) {
    event.preventDefault()

    // need to display a badge below after its submitted

    // console.log(formData)

    setnewData(data => [
      ...data, formData
    ])

    setformData(initFormData)

    // console.log(newData)
  }

  return (
    <div className="App">
      <form className="form" onSubmit={submitHandle}>
        <div className="line--one">
          <input
            type="text"
            placeholder="First Name"
            name="fName"
            className="first--name"
            onChange={handleChange}
            value={formData.fName}
            minLength={3}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lName"
            className="last--name"
            onChange={handleChange}
            value={formData.lName}
            minLength={3}
            required
          />
        </div>

        <div className="line--two">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="email"
            onChange={handleChange}
            value={formData.email}
            minLength={3}
            required
          />
          <input
            type="text"
            placeholder="Place Of Birth"
            name="birthPlace"
            className="birth--place"
            onChange={handleChange}
            value={formData.birthPlace}
            minLength={3}
            required
          />
        </div>

        <div className="line--three">
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            className="phone"
            onChange={handleChange}
            value={formData.phone}
            minLength={3}
            required
          />
          <input
            type="text"
            placeholder="Favorite Food"
            name="favoriteFood"
            className="favorite--food"
            onChange={handleChange}
            value={formData.favoriteFood}
            minLength={3}
            required
          />
        </div>

        <div className="comment--button">
          <textarea
            name="comments"
            placeholder="Tell Us About Yourself"
            className="comments"
            onChange={handleChange}
            value={formData.comments}
            minLength={3}
            required
          />
          <button className="submit--button">Submit</button>
        </div>
      </form>
      <br />
      <br />

    <div className="badge--section">
      <Badge
        fName={formData.fName}
        lName={formData.lName}
        email= {formData.email}
        birthPlace= {formData.birthPlace}
        phone= {formData.phone}
        favoriteFood= {formData.favoriteFood}
        comments= {formData.comments}
      />
    </div>

    <Badges data={newData}/>

    </div>
  );
}

export default App;
