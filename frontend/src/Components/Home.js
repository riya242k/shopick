import React,{ Component} from 'react';
import {Collapse, Card, CardText, CardTitle, Pagination, PaginationItem, PaginationLink, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Home extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            isDivOpen: false,
            isCaretDown: false,
        }
    
        this.toggleDiv = this.toggleDiv.bind(this);
      }

      toggleDiv(){
        this.setState({ isDivOpen: !this.state.isDivOpen , isCaretDown: !this.state.isCaretDown});
      }

 render()
     {
         return(

            <div className="container outer justify-content-center">

                 <div  className="form-inline justify-content-center heading">
                     <h4>RM Phonebook</h4>
                 </div>

                <div>
                  <form className="form-inline d-flex justify-content-center md-form form-sm">
                       <input className="form-control form-control-sm m-3 w-50" type="text" placeholder="Search" aria-label="Search" />
                       <button><i className="fa fa-search" aria-hidden="true"></i></button>
                  </form>
                  </div>
                  
                  <div>
                  
                  <div className="form-inline d-flex justify-content-center"> 
                     <span className="text-left mr-5" ><b>Sample Text</b></span>
                     <span className="text-middle ml-5"><i className="fa fa-caret-down" onClick = {this.toggleDiv}></i> </span>
                  </div>
                      
                      <Collapse isOpen = {this.state.isDivOpen} className=" container">
                       <Card >
                           <CardTitle> Riya Gupta </CardTitle>
                           <CardTitle> 24/02/00 </CardTitle>

                           <div className="text-right">
                           
                          <NavLink className = "nav-link" to = "/edit" >
                               <button className="btn btn-primary"> Edit </button> 
                          </NavLink>

                                <button className="btn btn-danger mr-3"> Delete </button>
                           </div>
                            <CardText>
                                This is the description part
                            </CardText>
                        </Card>
                      </Collapse>
                   </div>


                   <div>
                       <span>
                   <Pagination aria-label="Page navigation example" className="form-inline d-flex justify-content-center m-3" >
                        <PaginationItem> <PaginationLink first href="#" /> </PaginationItem>
                        <PaginationItem> <PaginationLink first href="#" /> </PaginationItem>
    
                        <PaginationItem> <PaginationLink href="#"> 1 </PaginationLink> </PaginationItem>
                        <PaginationItem> <PaginationLink href="#"> 2 </PaginationLink> </PaginationItem>
                        <PaginationItem> <PaginationLink href="#"> 3 </PaginationLink> </PaginationItem>
                        <PaginationItem> <PaginationLink href="#"> 4 </PaginationLink> </PaginationItem>

                        <PaginationItem> <PaginationLink last href="#" /> </PaginationItem>
                        <PaginationItem> <PaginationLink last href="#" /> </PaginationItem>
                        <span className=" ml-4">
                        <NavLink className = "nav-link" to = "/add" > 
                        <button className="plus-icon"> <i className="fa fa-plus"></i></button>
                        </NavLink>
                </span>
                </Pagination>
                </span>
                
                    </div>
                    </div>

         );
         
     }

}
export default Home;





