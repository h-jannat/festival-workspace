import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterStores } from '../../redux/Actions/stores';
import Store from './Store';
import NavBar from './NavBar';
import SearchBox from './SearchBox';
import PageButtons from './PageButtons';
import Footer from '../Footer';

import './StoreList.css';
import backgroundImg from '../../image/header.png';

const StoreList = () => {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterStores("", 1, 10));
  }, [dispatch]);

  const markets = useSelector((state) => state.stores.storeList);
  const isLoading = useSelector((state) => state.stores.isLoading);
  const totalStores = useSelector((state) => state.stores.totalStores);
  const pageNumber = useSelector((state) => state.stores.pageNumber);
  const totalAccepted = useSelector((state) => state.stores.acceptedStores);
  
  return (
    <div>
      <center>

        <img className="background" src={backgroundImg} width='100%' alt="main" />

      </center>

      <div className="ui container main-div ">

        <h1 className="ui container center aligned page-title">المحلات المسجلة</h1>
       <center>
        <div class="ui segment" style={{maxWidth:"450px"}}>
        <div class="ui two column  grid">
        <div class="column">
        <p className="ui container center aligned" style={{fontSize: "20px", color:"#4183c4"}}>
          عدد المحلات الكلي  <br/><b>{totalStores}</b> </p>
        </div>
        <div class="column">
        <p className="ui container center aligned" style={{fontSize: "20px", color:"#d16161"}}>
        عدد المحلات المقبولة <b>{totalAccepted}</b></p>
        </div>
        </div>
        <div class="ui vertical divider"></div>
        </div>
        </center>
        <NavBar>
          <SearchBox dispatch={dispatch} />
        </NavBar>
        <div className="ui container stores-table ">

          {
            isLoading ?

              <div className="ui active loader"></div> :
              markets.length === 0 ? <div className="ui container center aligned no-result-div">لا توجد نتائج</div> :
                <table className="ui table ">
                  <thead>
                    <tr>
                      <th className="center aligned">رقم</th>
                      <th className="center aligned">اسم المحل</th>
                      <th className="center aligned"> العنوان البريدي</th>
                      <th className="center aligned"> رقم المبنى</th>

                      <th className="center aligned"> اسم المالك</th>
                      <th className="center aligned"> رقم هاتف المالك</th>
                      <th className="center aligned">رقم هاتف المحل</th>

                      <th className="center aligned">إيميل</th>
                      <th className="center aligned">نوع النشاط</th>
                      <th className="center aligned">الكود</th>

                      <th className="center aligned">الحالة</th>
                      <th className="center aligned">التاريخ</th>
                      <th className="center aligned">عمليات</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      markets.map((store, index) =>
                        <Store store={store} key={index} index={(pageNumber - 1) * 10 + (index + 1)} />
                      )
                    }

                  </tbody>
                </table>}
        </div>
        <p></p>
        <p></p>
        <p></p>
        <PageButtons dispatch={dispatch} />
        <div className="ui section divider"></div>
      </div>

      <Footer />
      <div style={{ padding: "15px 0px" }}></div>
    </div>


  )
}

export default StoreList