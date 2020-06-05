import React,{ Component} from 'react';
class Add extends Component{

    constructor (props){
      super(props)
        this.state = {
            name: " " ,
            emailP: " ",
            email1:" ",
            conP:" ",
            con1:" ",
            con2:" ",
            dob:" "
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);

      }

      handleInputChange(event) {
          const target= event.target;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          const name=target.name;

          this.setState({
              [name]: value
          })
     }
      handleSubmit(event){
        console.log("Current state is :" + JSON.stringify(this.state));
        alert("Current state is :" + JSON.stringify(this.state));
        event.preventDefault();
    }

 render()
     {
         return(

            <div className="container outer1 justify-content-center">


                 <div  className=" heading">
                     <h4>RM Phonebook</h4>
                 </div>

                 <div className="justify-content-center inner m-4 h-">
                 <div  className="text-center mt-3">
                    <p> <button><i className="fa fa-arrow-left" aria-hidden="true"></i></button> Add New Contact </p>
                 </div>

                 <form onSubmit={this.handleSubmit} className=" container justify-content-center md-form form-sm ">
                 
                 <div>
                    <label>Name</label>
                       <input name="name" value ={this.state.name} onChange={this.handleInputChange} id="myName" className="form-control" type="text" placeholder="Name" required/> 
                </div>

                  <div>
                  <label>DOB</label>
                       <input name="dob" value ={this.state.dob} onChange={this.handleInputChange} id="myDob" className="form-control" type="date" />
                  </div>

                  <div>
                  <label>Mobile Number</label>
                      <input name="conP" value ={this.state.conP} onChange={this.handleInputChange} id="myPhone" className="form-control" type="tel" placeholder="+91XXXXXXXXX" required />
                       {/* <button className="plus-icon"> <i className="fa fa-plus"></i></button> */}
                  </div>


                  <div>
                  <label>Mobile Number</label>
                      <input name="con1" value ={this.state.con1} onChange={this.handleInputChange} id="myPhone" className="form-control" type="tel" required placeholder="+91XXXXXXXXX"  />
                       {/* <button className="plus-icon"> <i className="fa fa-plus"></i></button> */}
                  </div>

                  <div >
                  <label>Mobile Number</label>
                      <input name="con2" value ={this.state.con2} onChange={this.handleInputChange} id="myPhone" className="form-control" type="tel" placeholder="+91XXXXXXXXX"/>
                       {/* <button className="plus-icon"> <i className="fa fa-plus"></i></button> */}
                  </div>
                  
                  <div>
                 <label>Email</label>
                      <input name="emailP" value ={this.state.emailP} onChange={this.handleInputChange} id="myEmail" className="form-control" type="email" placeholder="abc@gmail.com"  required /> 
                      {/* <button className="plus-icon"> <i className="fa fa-plus"></i></button> */}
                  </div>

                  <div>
                 <label>Email</label>
                      <input name="email1" value ={this.state.email1} onChange={this.handleInputChange} id="myEmail" className="form-control" type="email" placeholder="abc@gmail.com" /> 
                      {/* <button className="plus-icon"> <i className="fa fa-plus"></i></button> */}
                  </div>

                 <div className="text-center">   
                      <button type="submit" className="btn btn-success m-2"> Save </button>
                  </div>

                  </form>
                  </div>
            </div>
          

         );
         
     }

}
export default Add;





