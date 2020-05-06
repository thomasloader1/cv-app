import React, { Component, Fragment } from "react";
import "./App.scss";
import SkillListTech from "./components/SkillListTech";
import SkillListSoft from "./components/SkillListSoft";
import { items as programmingSkills } from "./services/ProgrammingSkills";
import { items as softwareSkills } from "./services/SoftwareSkills";
import Navbar from "./components/Navbar";
import WorkExpierence from "./components/WorkExperience/WorkExperience";

class App extends Component {
    
    handleSelectionSkill = (lang) => {
        console.log(lang);
    };
    
    handleSelectionSoft = (name) => {
        console.log(name);
    }

    render() {
        return (
            <Fragment>
                    <Navbar/>
                    <div className="container">
                        <div className="row">
                            <WorkExpierence/>
                        </div>
                    </div>
                        <h1 className=" text-center w-100">Lista de Skills</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <SkillListTech
                                items={programmingSkills}
                                onSelectedSkill={this.handleSelectionSkill}
                            />
                            </div>
                            <div className="col">
                            <SkillListSoft
                                items={softwareSkills}
                                onSelectedSoft={this.handleSelectionSoft}
                            />
                            </div>
                        </div>
                    </div>
            </Fragment>
        );
    }
}

export default App;
