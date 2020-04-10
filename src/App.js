import React, {Component} from 'react';
import './App.scss';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Grid, Row, Col} from 'react-flexbox-grid';
import SkillList from './components/SkillList';
import { items } from './services/ProgrammingSkills'

class App extends Component {

    handleSelectionSkill = name =>{
        console.log(name)
    }
        render() {
            return ( 
                <React.Fragment>
                <AppBar position='sticky'>
                        <Toolbar>
                            <Typography color="inherit">
                                <h1>asd</h1>
                            </Typography>
                        </Toolbar>
                </AppBar>
                <Grid>
                    <Row center='xs'>
                        <Col xs={12} md={6}>
                            <div className="">
                                <SkillList items={items} onSelectedSkill={this.handleSelectionSkill}/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                </React.Fragment>
            );
        }
}


export default App;