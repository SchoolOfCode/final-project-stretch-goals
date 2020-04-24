import InputField from "../../InputField/InputField";

export default function TutorProfileSettingsForm({
  handleChange,
  formData,
  onChange
}) {
  const keys = Object.keys(formData);
  const newKeys = keys.slice(8, 14);
  // if fetch request sends the data in the correct order we should be able to map through from a certain index
  return (
    <>
      <h2>Profile Settings</h2>
      {newKeys.map(item => {
        return (
          <InputField
            label={item}
            onChange={handleChange}
            type="text"
            name={item}
          />
        );
      })}
      <p>upload image</p>
      <input name="img_url" type="file" onChange={handleChange}></input>
      <p>upload video url</p>
      <input name="img_url" type="file" onChange={handleChange}></input>
    </>
  );
}

{
  /* <label>
Subjects:{" "}
<input onChange={handleChange} name="subjects" type="text"></input>
</label>
<label>
Bio: <input onChange={handleChange} name="bio" type="text"></input>
</label>
<label>
Level:{" "}
<input
  onChange={handleChange}
  name="teachingLevel"
  type="text"
></input>
</label>
<label>
Location:{" "}
<input onChange={handleChange} name="location" type="text"></input>
</label>
<div>
<p>upload image</p>
<input name="img_url" type="file" onChange={handleChange}></input>
</div>
<div>
<p>upload video url</p>
<input name="img_url" type="file" onChange={handleChange}></input>
</div>
<label>
Price:{" "}
<input onChange={handleChange} name="price" type="text"></input>
</label>
<label>
Years Experience:{" "}
<input onChange={handleChange} name="exp" type="text"></input>
</label> */
}
