import React , {useState } from 'react'
import logo from '../../image/CustomerLogo.png';
import { useDispatch, useSelector} from 'react-redux';
import { addCustomer } from '../../redux/Actions/customer';
import ErrorMessage from '../ErrorMessage';
import ReCaptcha from './ReCaptcha';
import Footer from '../Footer';

const CustomerForm = () => {

    const dispatch = useDispatch();
    const isError = useSelector(state => state.customer.isError);
    const isDone = useSelector(state => state.customer.isDone);
   
    const [verfied,setVerified] = useState(false)
    const [validInput,setValidInput] = useState ({status:false ,type:'' , msg:'الرجاء التاكد من صحة البيانات المدخلة'});
    const [customerData, setCustomerData] = useState({fullname:'', phonenumber:'', city:''});
    
    const cityList = ['مصراتة','طرابلس','بنغازي','غريان','الخمس','زليتن','سرت','الزاوية'];
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {fullname,phonenumber,city} = customerData 
        let nameLen = fullname.trim().split(" ").length;
        
        if(nameLen >= 4 && nameLen <= 7)
        {
        if(isNaN(fullname) && !isNaN(phonenumber) && phonenumber.length === 10 &&city && !validInput.status)
        {
         dispatch(addCustomer(customerData));
        }
        else
        {
        setValidInput({status : true ,type:'generalError', msg:" يجب أن تكون المدخلات غير فارغة وصحيحة "})
        }
        }
        else
        setValidInput({ status: true, type: 'generalError', msg: 'الرجاء ادخال الاسم الرباعي ' });
    };
    
    const handleChangeOfNumber = (e)=>{
        if(isNaN(e.target.value))
        setValidInput({status : true , type :"NumberError" , msg:"يجب إدخال رقم فقط"})
        else{
            setCustomerData({...customerData,[e.target.name]:e.target.value})
            setValidInput({status : false,type:"" , msg:""})
        }
    }

    const handleChangeOfText = (e)=>{
        let format = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~1234567890]/;
        if(!isNaN(e.target.value)  || format.test(e.target.value))
        setValidInput({status : true , type :"TextError" , msg:"يجب ادخال حروف فقط"})
        else{     
            setCustomerData({...customerData,[e.target.name]:e.target.value})
            setValidInput({status : false,type:"" , msg:""})
        }
    }
 
    const form = () => (
        <div>
            <div className="ui container centered grid reg-container" >
            <div className="ui form segment reg-form" >
            <form className="ui form " >
            <img className="ui centered large image" alt="logo" src={logo}/>
            <h2 style={{fontFamily: 'inherit'}}> نموذج التسجيل </h2>
            <h1 style={{fontFamily: 'inherit'}}>شركة لمة - لتقنية المعلومات</h1>
            {isError || (validInput.status && validInput.type=== "generalError") ? (<ErrorMessage head="لقد حدث خطأ" content={validInput.msg?validInput.msg:"لا يمكنك التسجيل الآن"} /> ): null}
            <div className="ui form" >
            <div className={validInput.status && validInput.type=== "TextError" ?'error field':'field'}>
                <label className="text required">الاسم الرباعي</label>
                <input type="text" name="fullname" onChange ={handleChangeOfText} placeholder="الاسم" required  maxLength="40"/>
                <div className="five wide field">
                <p>{validInput.status && validInput.type=== "TextError" ?`${validInput.msg}`:''}</p>
                </div>  
            </div>

            <div className={validInput.status && validInput.type=== "NumberError" ?'error field':'field'}>
                <label className="text required" >رقم الهاتف</label>
                <div className="ui labeled input ">
                <input type="tel" name="phonenumber" placeholder="xxxxxxxx" onChange ={handleChangeOfNumber}  maxLength="10" required/>
                <p>{validInput.status && validInput.type=== "NumberError" ?`${validInput.msg}`:''}</p>
                </div>
            </div>
        
            <div className="field ">
                <label className="text required" >المدينة</label>
                <select name="city" className="ui search dropdown drop-text" onChange={handleChangeOfText}>
                <option value="">اختر مدينة</option>
                {
                    cityList.map((city,index)=>
                    <option value={city} key={index}>{city}</option>)
                }
                </select>
            </div>
            <div className="ui centered medium image" style={{marginTop:"30px"}}>
            <ReCaptcha setVerified={setVerified}/>
            </div>
            <div className="field">
            <button className="ui button text" type="submit" onClick={handleSubmit} disabled ={!verfied} >تسجيل</button>
            </div>
            </div>
            </form>
            <div className="ui section divider"></div>
            <Footer />
            </div>
            
            </div>
            
        </div>
    )
    return ( 
        isDone ? (()=>{
            setCustomerData({fullname:'', phonenumber:'', city:''});
            
        }): form()
    )
}

export default CustomerForm;

