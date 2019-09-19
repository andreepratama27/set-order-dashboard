import React, {useState, useEffect} from 'react';
import {FiMenu, FiTrash, FiClock, FiPlus} from 'react-icons/fi';
import {connect} from 'react-redux';
import {Confirm} from 'commons/confirm';
import ReactModal from 'react-modal';
import {Formik} from 'formik';
import Select from 'react-select';
import * as Yup from 'yup';

import Food from './components/food';
import EmptyWrapper from 'commons/empty-wrapper';

import {addMenuRequest, menuRequest} from '../../redux/ducks/menuRedux';
import {
  addScheduleRequest,
  deleteScheduleById,
} from '../../redux/ducks/scheduleRedux';

const options = [
  {value: 'sunday', label: 'Sunday'},
  {value: 'monday', label: 'Monday'},
  {value: 'tuesday', label: 'Tuesday'},
  {value: 'wednesday', label: 'Wednesday'},
  {value: 'thursday', label: 'Thursday'},
  {value: 'friday', label: 'Friday'},
  {value: 'saturday', label: 'Saturday'},
];

const TextInput = props => {
  const {label, error, name} = props;

  const _onChange = e => {
    props.onChange(name, e.target.value);
  };

  return (
    <section className="form mb-4">
      <div className="w-48 mb-4 flex flex-row justify-between w-full">
        <label className="text-gray-500">{label}</label>
      </div>
      {props.isTextArea ? (
        <textarea
          className={`border-2 rounded-sm h-24 w-full p-4 text-sm bg-gray-200  focus:outline-none text-dark ${
            error ? 'border-red-400' : 'border-none'
          }`}
          onChange={_onChange}
          {...props}
        />
      ) : (
        <input
          className={`border-2 rounded-sm h-10 w-full px-2 bg-gray-200  focus:outline-none text-dark ${
            error ? 'border-red-400' : 'border-none'
          }`}
          onChange={_onChange}
          {...props}
        />
      )}
      {error && (
        <label className="flex flex-row self-end text-red-400 text-sm">
          *{error}
        </label>
      )}
    </section>
  );
};

const mapStateToProps = state => ({
  menu: state.menu,
  schedule: state.schedule,
});

const mapDispatchToProps = dispatch => ({
  add(data) {
    dispatch(addMenuRequest(data));
  },

  addSchedule(data) {
    dispatch(addScheduleRequest(data));
  },

  deleteSchedule(id) {
    dispatch(deleteScheduleById(id));
  },

  init() {
    dispatch(menuRequest());
  },
});

const ScheduleBox = props => {
  const [confirm, setConfirm] = useState(false);

  return (
    <>
      <Confirm
        isVisible={confirm}
        onClose={() => setConfirm(false)}
        name={props.day}
        onConfirm={props.onDelete}
      />

      <div className="flex flex-col justify-center shadow rounded-lg p-4 relative">
        <button
          className="h-6 w-6 rounded-full absolute bg-red-500 t-0 r-0 btn-delete-schedule flex flex-col items-center justify-center"
          onClick={() => setConfirm(true)}>
          <FiTrash color="#fff" size={14} />
        </button>
        <div className="flex flex-row items-center">
          <FiClock color="#aaaaaa" className="mr-2" size={20} />
          <p className="text-gray-600 font-light mr-4">
            <span className="font-extrabold text-dark">{props.day}</span>,{' '}
          </p>
        </div>
        <p className="text-gray-500 font-light mr-4">
          {props.from} am - {props.to} pm
        </p>
      </div>
    </>
  );
};

const Menu = props => {
  const [modal, setModal] = useState(false);
  const [day, setDay] = useState(false);
  const [daySelected, setDaySelected] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [images, setImages] = useState(null);
  const [preview, setPreview] = useState([]);

  const {
    menu: {data},
    schedule: {data: dataSchedule},
  } = props;

  useEffect(() => {
    props.init();
  }, []);

  const onFileChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImages(file);
      setPreview([...preview, reader.result]);
    };

    reader.readAsDataURL(file);
  };

  const handleFormSubmit = value => {
    const fd = new FormData();
    fd.append('name', value.name);
    fd.append('price', value.price);
    fd.append('description', value.description);
    fd.append('avatar', images);

    // images.map(v => {
    //   fd.append('avatar', v);
    // });

    props.add(fd);
    setModal(false);
  };

  const onSubmitForm = values => {
    alert(JSON.stringify(values));
  };

  const createSchedule = e => {
    e.preventDefault();

    let obj = {
      day: daySelected,
      from,
      to,
    };

    props.addSchedule(obj);
    setDay(false);
  };

  const handleDayChange = day => {
    setDaySelected(day.label);
  };

  return (
    <section className="w-full overflow-scroll">
      <nav className="navbar flex items-center justify-between flex-wrap bg-gray-200 p-6 pl-10 fixed w-full z-10">
        <ul className="flex">
          <li className="mr-12 h-16 flex flex-col items-center justify-center">
            <a
              href="#"
              className="font-semibold text-gray-700 flex flex-row items-center">
              <FiMenu className="mr-2" />
              Allday Menu
            </a>
          </li>
          <li className="mr-8 h-16 flex flex-col items-center justify-center">
            <a
              href="#"
              className="font-light text-gray-500 flex flex-row items-center">
              <FiMenu className="mr-2" />
              Menu Lunch
            </a>
          </li>
          <li className="mr-8 h-16 flex flex-col items-center justify-center">
            <a
              href="#"
              className="font-light text-gray-500 flex flex-row items-center">
              <FiMenu className="mr-2" />
              Menu Dinner
            </a>
          </li>
        </ul>
      </nav>

      <ReactModal
        isOpen={day}
        className="modal-schedule w-1/3 outline-none mx-auto bg-white relative mt-24 h-auto shadow">
        <div className="w-full">
          <p className="text-center text-lg mt-4 text-gray-600 pt-6">
            Add new schedule
          </p>
          <form className="w-full h-full bg-white px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <div className="w-48 mb-4 flex flex-row justify-between w-full">
                <label className="text-gray-500">Day</label>
              </div>

              <Select
                options={options}
                placeholder="Select day"
                onChange={handleDayChange}
              />
            </div>
            <div className="mb-24 flex flex-row justify-between">
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
                onClick={() => setDay(false)}>
                Cancel
              </button>
              <button
                onClick={createSchedule}
                className="w-1/2 h-12 flex flex-row items-center justify-center bg-yellow-500 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={modal}
        className="w-1/3 mx-auto relative bg-white outline-none shadow pt-4 mt-10">
        <div className="w-full">
          <p className="text-center text-lg mt-4 text-gray-600">Add new menu</p>
          <Formik
            initialValues={{name: '', price: '', description: ''}}
            validationSchema={Yup.object().shape({
              name: Yup.string().required(),
              description: Yup.string().required(),
              price: Yup.number().required(),
            })}
            onSubmit={handleFormSubmit}
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

                    <div className="image-grid-wrapper flex flex-row flex-wrap h-40 overflow-scroll">
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

                      {preview.length
                        ? preview.map((v, k) => (
                            <div className="w-32 h-32 rounded-sm border mr-4 mb-4">
                              <img
                                src={v}
                                key={k}
                                className="h-full w-full object-contain"
                              />
                            </div>
                          ))
                        : null}
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-row justify-end mt-0 mb-4">
                  <button
                    className="w-1/3 h-12 flex flex-row items-center justify-center bg-gray-300 text-white rounded-lg"
                    onClick={() => setModal(false)}>
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="w-1/3 h-12 flex flex-row items-center justify-center bg-yellow-500 text-white rounded-lg ml-4">
                    Submit
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      </ReactModal>

      <div className="flex full mt-24  mb-8 px-10 w-full overflow-scroll flex-col">
        <div className="flex flex-col">
          <p className="text-gray-800 text-xl mb-2">Schedule</p>

          {!(dataSchedule || []).length && (
            <div className="w-full h-32 flex flex-col items-center justify-center shadow rounded-sm">
              <p className="text-xl">Schedule not found</p>
            </div>
          )}

          <div className="schedule-wrapper">
            {(dataSchedule || []).length
              ? dataSchedule.map((v, k) => (
                  <ScheduleBox
                    {...v}
                    key={k}
                    onDelete={() => props.deleteSchedule(v.id)}
                  />
                ))
              : null}
          </div>
        </div>

        <button
          className="mt-8 h-12 w-48 text-white mr-6 flex flex-row px-2 button-primary outline-none"
          onClick={() => setDay(true)}>
          <FiPlus color={'#ffffff'} size={22} className="mr-2" />
          Add new schedule
        </button>
      </div>

      <nav className="navbar flex items-center justify-between flex-wrap bg-gray-200 px-10">
        <ul className="flex">
          <li className="h-16 flex flex-col items-center justify-center mr-12">
            <a
              href="#"
              className="font-semibold text-gray-700 h-16 border-b-4 border-yellow-400 flex flex-col items-center justify-center">
              Appertizer
            </a>
          </li>
          <li className=" h-16 flex flex-col items-center justify-center mr-12">
            <a href="#" className="font-light text-gray-500">
              Month
            </a>
          </li>
          <li className=" h-16 flex flex-col items-center justify-center">
            <a href="#" className="font-light text-gray-500">
              Week
            </a>
          </li>
        </ul>
      </nav>

      <div className="wrapper">
        {data.length ? (
          data.map((v, k) => <Food key={k} {...v} />)
        ) : (
          <EmptyWrapper
            onButtonClick={() => setModal(true)}
            btnTitle="ADD MENU"
            title="MENU NOT FOUND"
            message="Lets add new menu to your restaurant"
          />
        )}

        {data.length && (
          <div className="px-10">
            <button
              className="mt-4 h-12 w-48 text-white mr-6 flex flex-row px-2 button-primary outline-none"
              onClick={() => setModal(true)}>
              <FiPlus color={'#ffffff'} size={22} className="mr-2" />
              Add new menu
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
