import { useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

// import Error from "./components/Error";
import TextLists from "./components/TextLists";
import Item from "./components/Item";

const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)

function App() {

  const [value, setValue] = useState("")
  const [arrayValue, setArrayValue] = useState([])
  const [result, setResult] = useState([])
  const [err, setErr] = useState(false)

  function addValue() {
    setArrayValue((preVal) => {
      return [...arrayValue, value]
    })
    setValue("")
  }

  const handleSubmit = (e) => {
    if (value.length === 0) {
      alert('Length is 0, please insert text before submitting')
      setErr(true)
      return
    }

    console.log(value)


    const apiCall = async () => {
      const res = await giphy.animate(value, { limit: 20 })
      console.log(res)
      setResult(res.data)
    }

    apiCall()
    setValue('')
    setErr(false)
  }



  return (
    <div className="container">
      <textarea
        name="textarea"
        id="textarea"
        className="textarea"
        placeholder="Write your text..."
        cols="10"
        rows="5"
        value={value}
        onChange={e => setValue(e.target.value)}
      ></textarea>
      <div className="btn-container">
        <button className="btn" onClick={addValue}>Submit</button>
        <button className="gif" onClick={handleSubmit}>Gif</button>
      </div>

      <div className="item-container">
        <TextLists gifs={result} />
        {arrayValue.map((el) => <Item input={el} />)}
      </div>
    </div>
  );
}

export default App;
