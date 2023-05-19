const Notification = (props) => {
  //  Write your code here.
  const { className, text, iconUrl} = props;
  const containerClassName=`notification-container ${className}`;
  return {
      <div className={containerClassName}>
          <img className="icon" src={iconUrl}/>
          <p className="text">{text}</p>
      </div>
  };
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="box-container">
         <Notification 
             className="information" 
             iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" 
             text="Informational Message"

         />
         <Notification 
            className="success" 
            iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" 
            text="Success Message"

         />
         <Notification 
             className="warning" 
             iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" 
             text="Warning Message"

         />
         <Notification 
             className="error" 
             iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" 
             text="Error Message"

          />

    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
