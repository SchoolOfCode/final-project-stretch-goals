export default function TutorProfileSettingsForm({
  handleChange,
  tutorSettings
}) {
  return (
    <>
      <div>
        <h2>Profile Settings</h2>
        <label>
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
        <div style={{ width: "70px", height: "70px", backgroundColor: "blue" }}>
          <p>upload image</p>
        </div>
        <div
          style={{
            width: "70px",
            height: "70px",
            backgroundColor: "blue",
            marginTop: "5px"
          }}
        >
          <p>upload video url</p>
        </div>
        <label>
          Price:{" "}
          <input onChange={handleChange} name="price" type="text"></input>
        </label>
        <label>
          Years Experience:{" "}
          <input onChange={handleChange} name="exp" type="text"></input>
        </label>
      </div>
    </>
  );
}
