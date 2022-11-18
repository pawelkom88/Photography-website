import { useState } from "react";
import Button from "@components/button/Button";
import styles from "./search-box.module.css";

export default function SearchBox({ setCategory, setNumOfPhotos }) {
  const [categoryInput, setCategoryInput] = useState("");
  const [selectInput, setSelectInput] = useState(10);

  function handleNumOfPages(e) {
    setSelectInput(e.target.value);
  }

  function handleCategory(e) {
    setCategoryInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategory(categoryInput);
    setNumOfPhotos(selectInput);
    setCategoryInput("");
  }


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="number of pages">Select number of images</label>
          <select onChange={handleNumOfPages} id="number of pages" className={styles.select}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Category name</label>
          <input
            className={styles.input}
            id="category"
            type="text"
            value={categoryInput}
            onChange={handleCategory}
            placeholder="e.g: wedding"
            required
          />
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
