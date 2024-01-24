import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
      },
    };
    console.log("child constructor");
  }
  async componentDidMount() {
  this.Timer= setInterval(()=>{
      console.log("interval")
    },1000)
    const data = await fetch("https://api.github.com/users/nimmybinu");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("child componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.Timer)
    console.log("componentWillUnmount");
  }

  render() {
    const { name } = this.props;
    const { login, avatar_url } = this.state.userInfo;
    console.log("child render" + name);
    return (
      <>
        <h1>profile class</h1>
        <img src={avatar_url} alt="" />
        <h1>{login}</h1>
      </>
    );
  }
}
export default ProfileClass;
