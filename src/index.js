import React,{Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style1.css";
import quizs from "./quizService"
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result.js";
import { Footer } from "./components/Footer";

class QuizBee extends Component{
    state ={
        questionBank: [],
        score:0,
        response:0
    };
    getQuestions = () =>{
        quizs().then(question =>{
            this.setState({
                questionBank:question
            })
        })
    }
    computeAnswer = (answer,correctAnswer) =>{
        if(answer === correctAnswer){
            this.setState({
                
                score:this.state.score +1
            });
        }
        this.setState({
            
            response:this.state.response<5?this.state.response +1:5
        })
    }
    componentDidMount(){
        this.getQuestions();
    }
    playAgain = () => {
        this.getQuestions();
        this.setState({
            score:0,
            response:0
        })
    }
    render(){
        return(
            <>
            <div className="Box-1">

                <div className="container">
                    <div className="title">
                        QuizerBend
                    </div>
                    {this.state.questionBank.length>0&&this.state.response<5 && this.state.questionBank.map(({question,answers,
                    correct,questionId}) => (<QuestionBox question ={question} options={answers} key={questionId}
                    selected = {(answer)=>this.computeAnswer(answer,correct)}
                    />)
                    )}
                    {this.state.response === 5?(<Result score={this.state.score} playAgain = {this.playAgain}/>):null}
                    {/* {this.state.response === 5?(<h2>hello</h2>):null} */}
                    {/* {this.state.response === 5?<Result/>:null} */}
                </div>
            </div>
            <Footer/>
            </>
        );
    }
}
ReactDOM.render(<QuizBee />,document.getElementById("root"));