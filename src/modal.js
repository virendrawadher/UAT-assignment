import './App.css';

export function Modal(props){
    const {showModal, closeModal, dataModal} = props
    console.log("data inside modal", dataModal)
    return (
      <div className = {showModal ? "modal" : "hide"}>
        <table>
          <tr>
            <th className = "tablecontent" >Paramter</th>
            <th className = "tablecontent">R Phase</th>
          </tr>
          <tr>
            <td className = "tablecontent">Voltage Status</td>
            <td className = "tablecontent">{dataModal.r_volt_status}</td>
          </tr>
          <tr>
            <td className = "tablecontent">MCB Status</td>
            <td className = "tablecontent">{dataModal.r_mcb_status}</td>
          </tr>
          <tr>
            <td className = "tablecontent">Load Status</td>
            <td className = "tablecontent">{dataModal.r_load_status}</td>
          </tr>
          <tr>
            <td className = "tablecontent">Pf Status</td>
            <td className = "tablecontent">{dataModal.r_pf_status}</td>
          </tr>
        </table>
        <button onClick = {closeModal} className = "panelButton close">X</button>
      </div>
    )
  
  }