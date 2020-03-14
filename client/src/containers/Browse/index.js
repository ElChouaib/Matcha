import React ,{useEffect,useState}from 'react';
import {connect} from "react-redux";
import Home from '../../components/Browse';
import {getOptions} from '../../actions/addInfoAction';
import {getUsers,blockUser,likeUser,dislikeUser,reportUser,viewProfileUser, sortUsers} from '../../actions/userAction';
import {resetStateUsers} from '../../actions/resetStateAction';
import MyModal from "../../components/commun/modal";
import ViewPro from "../../components/Browse/vP";

const HomeContainer = (props) => {
    const {getOptions, selectOptions,getUsers,blockUser,likeUser,dislikeUser,reportUser,users,viewProfileUser,resetStateUsers,sortUsers} = props
    const [suggestion, setSuggestion] = useState(true);
    const [sort, setSort] = useState(false);
    const [indice,setIndice] = useState(0);
    const [methode, setMethode] = useState(null);
    const [rating, setValueRating] = useState([0,0]);
    const [age, setValueAge] = useState([18,18]);
    const [loc, setValueLoc] = useState([0]);
    const [nbrTags, setValueNbrTags] = useState([0,0]);
    const [tags, setValuetags] = useState(null);
    const [state, setState] = useState({
        open: false,
        user: null,
        images: null,
        interests: null,
    });
    let arrayTags = [];
    tags && tags.forEach(item => {
        arrayTags.push(item.value); 
    });
    const filtre = {
        tags : arrayTags,
        nbrTags : nbrTags,
        rating : rating,
        age : age,
        loc : loc,

    }
    useEffect(() => {
        getOptions();
        setValueRating([0,0]);
        setValueAge([18,18])
        setValueLoc([0])
        setValueNbrTags([0,0])
        setValuetags(null)
        setIndice(0);
            getUsers(null,0);    
    }, []);
    

    const handle = (methode) => {
        setIndice(0);
        setSort(true);
        setSuggestion(false);
        setMethode(methode);
        sortUsers(methode,filtre,0);
    };

    const handleChangeRating = (e,newValue) => {
        setValueRating(newValue);
        return newValue;
    };
    const handleChangeAge = (e,newValue) => {
        setValueAge(newValue);
        return newValue;
    };
    const handleChangeLoc = (e,newValue) => {
        setValueLoc(newValue);
        return newValue;
    };
    const handleChangeNbrTags = (e,newValue) => {
        setValueNbrTags(newValue);
        return newValue;
    };
    const handleChangeTags = (newValue) => {
        setValuetags(newValue);
        return newValue;
    }; 
    
   

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            if(sort === true)
                sortUsers(methode,filtre,indice+1);
            else if(suggestion === true)
                getUsers(filtre,indice+1)    
            setIndice(indice + 1);
        }
    };
    const handleSubmit = () => {
        if(arrayTags.length === 0 && nbrTags[0] === 0 && nbrTags[1] === 0 && rating[0] === 0 
            && rating[1] === 0 && loc === 0  && age[0] === 18  && age[1] === 18 )
            {
                resetStateUsers();
                return ;
            }
        setSuggestion(true);
        setIndice(0);
        getUsers(filtre,0);
        
    };
   
    const handleBlock = (blocked_user_id) => {
            blockUser(blocked_user_id);
            setState({
                open: false,
            });
    };
    const handleDislike= (dislike_user_id) =>{
        dislikeUser(dislike_user_id);
        setState({
            open: false,
        });
    };
    const handleLike = (liked_user_id) => {
            likeUser(liked_user_id);
            setState({
                open: false,
            });
    };
    const handleReport = (reported_user_id) => {
            reportUser(reported_user_id);
            setState({
                open: false,
            });
    };
    const handleViewProfile = (user,images,interests) => {
        viewProfileUser(user.id);
        setState({
            open: true,
            user: user,
            images: images,
            interests: interests,
        });
    };
    const handleClose = () => {
        setState({
            open: false,
        });
    };
    return (
        <div>
            <Home selectOptions={selectOptions} users={users} handleBlock={handleBlock} handleLike={handleLike} handleViewProfile={handleViewProfile} handleChangeRating={handleChangeRating}
                handleChangeAge={handleChangeAge} handleChangeLoc={handleChangeLoc} handleChangeNbrTags={handleChangeNbrTags} rating={rating}
                handleChangeTags={handleChangeTags} loc={loc} nbrTags={nbrTags} age={age} handleSubmit={handleSubmit}  handle={handle} handleDislike={handleDislike}
                />
            
                    {state.open && <MyModal isOpen={state.open}  handleClose={handleClose}>
                        <ViewPro    handleBlock={handleBlock} handleLike={handleLike} handleReport={handleReport}
                        handleDislike={handleDislike} user={state.user} images={state.images} interests={state.interests}
                        />
                    </MyModal>}
        
        </div>
    )
}

const mapStateToProps = (state) => (
{
    "user": state.user,
    'selectOptions': state.addInfo.selectOptions,
    "users": state.users,
});
const mapDispatchToProps = {
    "getOptions": getOptions,
    "getUsers" : getUsers,
    "blockUser" : blockUser,
    "likeUser" : likeUser,
    "dislikeUser" : dislikeUser,
    "reportUser" : reportUser,
    "viewProfileUser" : viewProfileUser,
    "resetStateUsers" : resetStateUsers,
    "sortUsers" : sortUsers,
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);