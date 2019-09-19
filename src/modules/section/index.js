import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {FiTrash, FiClock, FiPlus} from 'react-icons/fi';
import ReactModal from 'react-modal';
import {Formik} from 'formik';
import * as Yup from 'yup';

import EmptyWrapper from 'commons/empty-wrapper';
import TextInput from 'commons/text-input';
import SectionBox from './components/section-box';

import {
  sectionRequest,
  addSectionRequest,
  deleteSectionById,
} from '../../redux/ducks/sectionRedux';

const mapStateToProps = state => ({
  section: state.section,
});

const mapDispatchToProps = dispatch => ({
  init() {
    dispatch(sectionRequest());
  },

  add(data) {
    dispatch(addSectionRequest(data));
  },
});

const Section = props => {
  const [modal, setModal] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const {data} = props.section;

  useEffect(() => {
    props.init();
  }, []);

  const onSubmitForm = ({name, description}) => {
    let obj = {
      name,
      description,
      from,
      to,
    };

    props.add(obj);
    setModal(false);
  };

  return (
    <>
      <ReactModal
        isOpen={modal}
        className="modal-section w-1/3 outline-none mx-auto bg-white relative mt-24 h-auto shadow">
        <div className="w-full">
          <p className="text-center text-lg mt-4 text-gray-600 pt-3">
            Add new section
          </p>
          <Formik
            initialValues={{name: '', description: ''}}
            validationSchema={Yup.object().shape({
              name: Yup.string().required(),
              description: Yup.string().required(),
            })}
            onSubmit={onSubmitForm}
            render={({
              values,
              touched,
              errors,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className="w-full h-full bg-white px-8 pt-6 pb-8 mb-4">
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
                    isTextArea
                    label="Description"
                    name="description"
                    error={touched && errors.description}
                    onChange={handleChange}
                    value={values.description}
                  />
                </div>
                <div className="mb-16 flex flex-row justify-between">
                  <div className="w-1/2 mr-4">
                    <div className="w-48 mb-4 flex flex-row justify-between w-full">
                      <label className="text-gray-500">From</label>
                    </div>
                    <input
                      className={`border-2 rounded-sm h-10 w-full px-2 bg-gray-200  focus:outline-none text-dark border-none`}
                      type="time"
                      onChange={e => setFrom(e.target.value)}
                    />
                  </div>
                  <div className="w-1/2">
                    <div className="w-48 mb-4 flex flex-row justify-between w-full">
                      <label className="text-gray-500">To</label>
                    </div>
                    <input
                      className={`border-2 rounded-sm h-10 w-full px-2 bg-gray-200  focus:outline-none text-dark border-none`}
                      type="time"
                      onChange={e => setTo(e.target.value)}
                    />
                  </div>
                </div>

                <div className="w-full absolute bottom-0 left-0 flex flex-row justify-between">
                  <button
                    className="w-1/2 h-12 flex flex-row items-center justify-center bg-gray-900 text-white"
                    onClick={() => setModal(false)}>
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="w-1/2 h-12 flex flex-row items-center justify-center bg-yellow-500 text-white">
                    Submit
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      </ReactModal>

      <section className="w-full overflow-scroll">
        <nav className="navbar flex items-center justify-between flex-wrap bg-gray-200 p-6 pl-10 fixed w-full z-1">
          <ul className="flex">
            <li className="mr-12 h-16 flex flex-col items-center justify-center">
              <a
                href="#"
                className="font-semibold text-gray-700 flex flex-row items-center font-extrabold">
                Section List
              </a>
            </li>
          </ul>
        </nav>

        {!(data || []).length && (
          <EmptyWrapper onButtonClick={() => setModal(true)} />
        )}

        <div className="wrapper mt-20">
          {data.map((v, k) => <SectionBox key={k} {...v} />)}
        </div>

        {(data || []).length && (
          <div className="button-wrapper px-10 pb-4 pt-4 flex flex-row">
            <button
              className="mt-4 h-12 w-48 text-white mr-6 flex flex-row px-2 button-primary"
              onClick={() => setModal(true)}>
              <FiPlus color={'#ffffff'} size={22} className="mr-2" />
              Add new section
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
