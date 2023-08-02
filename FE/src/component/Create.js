import { useEffect, useState } from "react"
import { Formik,Field,ErrorMessage,Form } from "formik";
import { findStatusById } from "../service/status";
import * as yup from"yup";
import { createNewSong } from "../service/songs";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

     export default function CreateSong(){
      const navigate =useNavigate();
      const [status,setStatus]=useState([]);
      const getStatus =async()=>{
        const data = await findStatusById(JSON.stringify(1));
        console.log(data);
        setStatus(data);
      }
    useEffect (()=>{
      getStatus();
    },[])
    const handleSubmit = async (values)=>{
      const object ={
        ...values,
        status:status,
        
      }
      await createNewSong(object)
      .then(()=>{
        navigate("/")
        Swal.fire({
          title:"Đăng Kí thành công!!",
          text:"đã đăng kí 1 bài hát mới",
          icon:"success",
          timer:2000
        })
      })
      .catch(()=>{
        navigate("/create");
      })
    }
      return(
        <Formik initialValues={{
          name_song:"",
          status:status.description,
          singer:"",
          artist:"",
          time_up:"",
          number_fav:0,
        }}
        validationSchema={yup.object().shape({
          name_song:yup.string().required("Không được để trống").min(5,"ít nhất 5 kí tự").max(100,"không vượt quá 100 kí tự"),
          singer:yup.string().required("Không được để trống").min(5,"ít nhất 5 kí tự").max(30,"không vượt quá 30 kí tự "),
          artist:yup.string().required("Không được để trống").min(5,"ít nhất 5 kí tự").max(30,"không vượt quá 30kí tự "),
          time_up:yup.string().required("Không được để trống"),
          number_fav:yup.number(),
        }
        )}
        onSubmit={(values)=>{
          handleSubmit(values);

        }}
        >
        <Form className="container">
        <div className="row gutters">
          <div className="title">
            <h2>Đăng Kí Bài Hát</h2>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card ">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="name_song">Tên Bài Hát</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="name_song"
                        name="name_song"
                        placeholder="Nhập tên Bài hát"
                      />
                      <ErrorMessage name="name_song" component="div" className="text-error" ></ErrorMessage>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      {/* <label for="status">Trạng Thái</label> */}
                      <Field name="status" type="hidden" values={status.id} />
                      <ErrorMessage name="status" component="div" className="text-error" ></ErrorMessage>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="singer">Ca Sĩ</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="singer"
                        name="singer"
                        placeholder=""
                      />
                       <ErrorMessage name="singer" component="div" className="text-error" ></ErrorMessage>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="artist">Nhạc Sĩ</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="artist"
                        name="artist"
                        placeholder=""
                      />
                       <ErrorMessage name="artist" component="div" className="text-error" ></ErrorMessage>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="time_up">Thời Gian Phát</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="date"
                        name="time_up"
                        placeholder=""
                      />
                       <ErrorMessage name="date" component="div" className="text-error" ></ErrorMessage>
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      {/* <label htmlFor="number_fav">Số Lượt yêu thích</label> */}
                      <Field
                        type="hidden"
                        className="form-control"
                        id="number_fav"
                        name="number_fav"
                        values={0}
                      />
                       <ErrorMessage name="number_fav" component="div" className="text-error" ></ErrorMessage>
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button
                        type="reset"
                        id="submit"
                        name="submit"
                        className="btn btn-secondary"
                      >
                        Hoàn Tác
                      </button>
                      <button
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary"
                      >
                        Đăng Kí
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
      </Formik>
  
      )
     }
      