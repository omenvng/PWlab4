import React, { Component } from "react";
import axios from "axios";
import ShowQuestions from "./list";
import { useParams } from "react-router-dom";


function params(Component) {
  return props => <Component {...props} params={useParams()} />;
}

export class Quiz extends Component {   
  constructor(props) {
    super(props);
      this.state = {
      questions: [],
      currentIndex: 0,
    };
  };

  componentDidMount() {
    let { quizId } = this.props.params;
    console.log(quizId);
        axios
      .get(`https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/${quizId}`, {
        headers: { "X-Access-Token": "4a975d7232f12d57e1a89a9ee49e3a5c7c6161a6ed31a65e0e2a6867ab8befb6" },
      })
      .then((res) => {
        const otherss = res.data;
        this.setState({
          questions: otherss.questions,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

 
  render() {
    return (
      <><h2>{this.state.questions.title}</h2><ShowQuestions questions={this.state.questions} /></>
    );
  }
}
export default params(Quiz);