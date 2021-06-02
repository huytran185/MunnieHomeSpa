import React from 'react'
import classes from './Content.module.css';

//Content component of About Component

const content = ()=>(
    <div>
        <div className={classes.Title}>Welcome To</div>
        <div className={classes.Company}>Munnie HomeSpa</div>
        <div className={classes.Des}>
            Là một điểm đến lý tưởng cho những tín đồ làm đẹp 
            bởi đội ngũ nhân viên chuyên nghiệp, các dịch vụ chất lượng và nhiều ưu đãi hấp dẫn. ​
            <br/><br/> Nhằm đáp ứng và am hiểu các vấn đề về làn da của quý khách. Munnie Homéspa mang lại những dịch vụ giúp cải thiện các tình trạng về làn da như:
            <ul>
                <li><i className="fa fa-caret-right"></i>Điều trị mụn (Ances Treatment)</li>
                <li><i className="fa fa-caret-right"></i>Chăm sóc da (Skincare Services)</li>
                <li><i className="fa fa-caret-right"></i>Và các gói liệu trình khác... (Others...)</li>
            </ul>
        </div>
    </div>
)

export default content;