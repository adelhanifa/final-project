import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

const CreateGroupForm = (props) => {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const [group, setGroup] = useState({
    admin: loggedInUser ? loggedInUser._id : "",
    titel: "",
    description: "",
    photo: "",
  });
  console.log({ admin: group.admin });
  const onSubmit = () => {
    console.log({ group });
    const formData = new FormData();
    formData.append("admin", group.admin);
    formData.append("photo", group.photo);
    formData.append("titel", group.titel);
    formData.append("description", group.description);
    console.log({ formData });
    axios
      .post("/group/create/", formData, {})
      .then((res) => {
        console.log(res.data)
        if(res.data.group){
          window.location= '/groups-card'
        }
      })
      .catch((err) => console.log({ err }));
  };
  if (group.admin) {
    return (
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Group title</label>
          <input
            placeholder="Which goal is this group about?"
            name="titel"
            onChange={(e) => setGroup({ ...group, titel: e.target.value })}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            placeholder="Description"
            name="description"
            onChange={(e) =>
              setGroup({ ...group, description: e.target.value })
            }
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Photo</label>
          <input
            placeholder="choose a picture"
            type="file"
            name="photo"
            onChange={(e) => setGroup({ ...group, photo: e.target.files[0] })}
            required
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions of this app" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  } else
    return (
      <div>
      <div className="text-center text-danger">You need to login first !!</div>
      <a className="btn btn-secondary" href="/login/register">Login</a>
      </div>
    );
};
export default CreateGroupForm;
