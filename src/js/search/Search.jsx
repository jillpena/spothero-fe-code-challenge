import React from 'react';
import {useState}from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateSelected} from '../spot/spot-actions';
import SpotList from './spot-list/SpotList';
import SpotDetails from './spot-details/SpotDetails';
import Modal from '../common/Modal';

const Search = ({selectedSpot, spots, setSpot}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const onModalClose = () => {
        setModalOpen(false);
    };

    const setSpotCallback = (spot) => {
        setModalOpen(true);
        setSpot(spot);
    };

    return (
        <div className="Search">
            <SpotList
                spots={spots}
                selectedSpot={selectedSpot}
                setSpot={setSpotCallback}
            />
            <div className="Search-content">
                {modalOpen && (
                    <Modal
                        className={"Spot-details-modal"}
                        title={"Spot Details"}
                        isOpen={modalOpen}
                        onClose={onModalClose}
                    >
                        <SpotDetails selectedSpot={selectedSpot} />
                    </Modal>
                )}
            </div>
        </div>
    );
};

Search.propTypes = {
    selectedSpot: PropTypes.object,
    spots: PropTypes.arrayOf(PropTypes.object).isRequired,
    setSpot: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    const {
        spot: {selected: selectedSpot},
    } = state;

    return {
        selectedSpot,
    };
};

const mapDispatchToProps = {
    setSpot: updateSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
