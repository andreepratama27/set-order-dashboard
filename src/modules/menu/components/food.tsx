import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {FiTrash, FiEdit2} from 'react-icons/fi';
import ReactModal from 'react-modal';
import {Confirm} from 'commons/confirm';
import TextInput from 'commons/text-input';

import {deleteMenuById} from '../../../redux/ducks/menuRedux';

const ENDPOINT = 'http://localhost:3000/uploads/';

const mapDispatchToProps = (dispatch: any) => ({
  deleteMenu(id: any) {
    dispatch(deleteMenuById(id));
  },
});

const Food = (props: any) => {
  const [confirm, setConfirm] = useState(false);
  const [modal, setModal] = useState(false);

  const onFileChange = (e: any) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {};

    reader.readAsDataURL(file);
  };

  const onClose = () => {
    setConfirm(false);
  };

  const onConfirm = () => {
    props.deleteMenu(props.id);
    setConfirm(false);
  };

  return (
    <>
      <ReactModal isOpen={modal}>
        <div className="w-full">
          <p className="text-center text-lg mt-4 text-gray-600">Add new menu</p>
          <Formik
            initialValues={{name: '', price: '', description: ''}}
            validationSchema={Yup.object().shape({
              name: Yup.string().required(),
              description: Yup.string().required(),
              price: Yup.number().required(),
            })}
            onSubmit={() => console.log('handle submit')}
            render={({
              values,
              touched,
              errors,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className="w-full h-full bg-white px-8 pt-6 pb-8 mb-4">
                <div className="h-full">
                  <div className="mb-4">
                    <TextInput
                      label="Name"
                      name="name"
                      error={touched && errors.name}
                      onChange={handleChange}
                      value={values.name}
                    />
                  </div>
                  <div className="mb-6">
                    <TextInput
                      label="Price"
                      name="price"
                      error={touched && errors.price}
                      onChange={handleChange}
                      value={values.price}
                    />
                  </div>
                  <div className="mb-6">
                    <TextInput
                      isTextArea
                      label="Description"
                      name="description"
                      error={touched && errors.description}
                      onChange={handleChange}
                      value={values.description}
                    />
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-500 mb-2">Images</p>

                    <div className="image-grid-wrapper flex flex-row flex-wrap h-64 overflow-scroll">
                      <label
                        htmlFor="upload"
                        className="w-32 h-32 rounded-sm border border-dashed rounded-sm flex flex-col items-center justify-center mr-4 mb-4">
                        <p className="text-gray-500">Upload Image</p>
                        <input
                          type="file"
                          name="upload"
                          id="upload"
                          className="hidden"
                          onChange={onFileChange}
                        />
                      </label>

                      {/*preview.length
                        ? preview.map((v, k) => (
                            <div className="w-32 h-32 rounded-sm border mr-4 mb-4">
                              <img
                                src={v}
                                key={k}
                                className="h-full w-full object-contain"
                              />
                            </div>
                          ))
                        : null*/}
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-row justify-end mt-64 mb-4">
                  <button
                    className="w-1/3 h-12 flex flex-row items-center justify-center bg-gray-300 text-white rounded-lg"
                    onClick={() => setModal(false)}>
                    Cancel
                  </button>
                  <button
                    onClick={() => console.log('handle submit')}
                    className="w-1/3 h-12 flex flex-row items-center justify-center bg-yellow-500 text-white rounded-lg ml-4">
                    Submit
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      </ReactModal>

      <Confirm
        isVisible={confirm}
        onClose={onClose}
        name={props.name}
        onConfirm={onConfirm}
      />

      <div className="list px-10 py-5 border-b-2 border-gray-100">
        <div className="information flex flex-col justify-center">
          <p className="text-gray-800 font-semibold">{props.name}</p>
          <p className="text-gray-600 font-light text-sm mt-1">
            {props.description}
          </p>
        </div>
        <div className="price flex flex-col justify-center">
          <p className="font-semibold text-gray-800">Rp.{props.price}</p>
        </div>
        <div className="display">
          <div className="image-box w-16 h-16 rounded-lg">
            <img
              src={`${ENDPOINT}/${props.avatar}`}
              className="w-full h-full rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div className="delete-grid flex flex-row justify-center items-center">
          <FiTrash
            size={28}
            color={'#aaaaaa'}
            className="mr-4"
            onClick={() => setConfirm(true)}
          />

          <FiEdit2 size={22} color={'#aaaaaa'} onClick={() => setModal(true)} />
        </div>
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(Food);
