import style from './styles/about-us.module.scss'
import Image from 'next/image';
import { Col, Row } from 'antd';
import ServicesSupportYourSiteSection from '../index/sections/servicesSupportYourSite_section';
import DownAppMobile from '../index/sections/downAppMobile_section';
const AboutUsPage = () => {

    return (
        <>
            <section className={`page_ ` + style.aboutUsPage}>
                <div className="container_">
                    <div className='sectionDes secSetting'>
                        <Image alt="aboutUsPage" src={'/icons/bee.png'} width="58" height="49" />


                        <h2>أهلا و سهلاً بكم عملائنا في خلية النحل الالكترونية “ Bshopa “</h2>
                        <h1>من نحن ؟</h1>

                        <p>ونحن نخطط لأطلاق منصتنا الالكترونية التي ستخلق كيان جديد بعالم التجارة الالكترونية ، احترنا في ماذا نطلق عليها؟
                        
                         </p>

                        <p>ولأننا حريصين على استقطاب مزودين خدمات مميزين – رجال وسيدات اعمال ، رواد ورائدات اعمال يريدون ان يقدموا افضل ما لديهم لعملائهم من خلال عمل جاد و مخلص ، وأيضا ولأننا حريصين على استقطاب عملاء مميزين يريدون الحصول على افضل المنتجات و الخدمات بأفضل جودة و أفضل سعر ممكن
                        </p>

                        <p>فلم نجد افضل من ان نستلهم شعارنا واسم منصتنا من عالم النحل ، الذي ذكره الله -سبحانه وتعالى- في كتابه العزيز بل سمى سورة كاملة باسم سورة النحل قال تعالي : وأوحى ربك إلى النحل أن اتخذي من الجبال بيوتا ومن الشجر ومما يعرشون* ثم كلي من كل الثمرات فاسلكي سبل ربك ذللا يخرج من بطونها شراب مختلف ألوانه فيه شفاء للناس إن في ذلك لآية لقوم يتفكرون. (النحل، آية: 68، 69)
                        </p>

                        <p>فالله -سبحانه وتعالى- يريد أن يلفت انتباهنا إلى عظمة هذا المخلوق الصغير الذي تتجلى فيه قدرة الله تعالى
                        </p>

                        <p>فلديه تنظيم لفرق العمل بطريقة احترافية فلكل فرد بالفريق مهمه ، ولديه تنوع ، ولديه بذل الجهد فهو يطير لألاف الأمتار لاختيار افضل الازهار لارتشاف رحيقها و تقديم عسل بأفضل جودة ممكنه .</p>
                    </div>


                    <div className='sectionComponents secSetting'>
                        <h3>لذا اخترنا ان نطلق على منصتنا  Bshopa مكونه من ثلاث أجزاء : </h3>

                        <ul>
                            <li>
                                <span className='icons'>
                                    <Image alt="icon" src={'/icons/aboutus/B.png'} width={30} height={30} />
                                </span>
                                <span>1.	اولاً حرفB  اختصار لاسم النحلة بالإنجليزية Bee .</span>
                            </li>

                            <li>
                                <span className='icons'>
                                    <Image alt="icon" src={'/icons/aboutus/Storefront.png'} width={30} height={30} />
                                </span>
                                <span>2.	ثانياً كلمة  shop و تعني متجر . </span>
                            </li>

                            <li>
                                <span className='icons'>
                                    <Image alt="icon" src={'/icons/aboutus/winner-medal.png'} width={30} height={30} />
                                </span>
                                <span>3.	أضفنا اول حرف باللغة الإنجليزية a  كناية عن موقع الريادة الذي سنكون فيه معكم و بكم . </span>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='sectionAboutDes'>
                    <div className="container_">
                        <div className='secSetting'>
                            <Row gutter={15}>

                                <Col xs={24} md={24} lg={12} >
                                    <div className='sectionAboutDes_'>
                                        <p>فــ منصتكم  Bshopa  تساعدكم لأطلاق و إدارة متجرك بطريقة بسيطة ولكنها مصنفة تضمن تواجدكم في مجالكم الذي تعملون فيه . و يمكنك من إدارة فريق عملكم و توزيع المهام عليهم بطريقة احترافية  النحل .
                                        </p>
                                        <p>كل هذا ونحن نضع بين اعيننا تحقيق شراكة استراتيجية معكم تنعكس على اربع محاور رئيسيه لأعمالكم و منتجاتكم وخدماتكم :-
                                        </p>

                                        <ul>
                                            <li>1.	زيادة مبيعاتكم</li>
                                            <li>2.	زيادة ارباحكم</li>
                                            <li>3.	زيادة رضا عملائكم الداخليين ( فريق عملكم ) و زيادة رضا عملائكم الخارجيين </li>
                                            <li>4.	تقليل تكاليفكم</li>
                                        </ul>
                                    </div>
                                </Col>


                                <Col xs={24} md={24} lg={8} >
                                    <div className='Image_'>
                                        <Image alt="aboutDes" src={'/images/aboutDes.png'} width={324} height={324} />
                                    </div>
                                </Col>

                            </Row>

                        </div>
                    </div>
                </div>

                <div className="container_">
                    <div className='sectionAboutDes2 secSetting'>

                        <p>فأهلا بكم في خلية النحل الالكترونية (( Bshopa )) لنقوم بكم ومعكم بعمل جاد لتقديم افضل المنتجات والخدمات لعملائنا بأفضل جوده ممكنه و بأفضل سعر موجود بالسوق ، لنزيد من جودة حياتهم بما نقدمه مثلما يفعل العسل لمن يشربه .</p>
                    </div>

                </div>


                <div className='ServicesSupport_ '>

                    <ServicesSupportYourSiteSection />
                </div>


                <div className='DownAppMobile_ '>
                    <DownAppMobile />
                </div>
            </section>
        </>
    );
};

export default AboutUsPage;