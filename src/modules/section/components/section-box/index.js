import React, {useState} from 'react';
import {connect} from 'react-redux';
import {FiTrash} from 'react-icons/fi';
import {Confirm} from 'commons/confirm';
import {deleteSectionById} from '../../../../redux/ducks/sectionRedux';

const mapDispatchToProps = dispatch => ({
  delete(id) {
    dispatch(deleteSectionById(id));
  },
});

const SectionBox = props => {
  const [modal, setModal] = useState(false);

  const onModalClose = () => {
    setModal(false);
  };

  const deleteSection = () => {
    props.delete(props.id);
    setModal(false);
  };

  return (
    <>
      <Confirm
        isVisible={modal}
        onClose={onModalClose}
        name={props.name}
        onConfirm={deleteSection}
      />
      <div className="list-section px-10 py-5 border-b-2 border-gray-100">
        <div className="information flex flex-col justify-center">
          <p className="text-gray-800 font-semibold">{props.name}</p>
          <p className="text-gray-600 font-light text-sm mt-1">
            {props.description}
          </p>
        </div>
        <div className="display">
          <div className="image-box w-16 h-16 rounded-lg">
            <img
              src="https://picsum.photos/id/235/200/300"
              className="w-full h-full rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div className="delete-grid flex flex-col justify-center items-center">
          <FiTrash size={22} color={'#aaaaaa'} onClick={() => setModal(true)} />
        </div>
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(SectionBox);
