import "./activeMembers.css";

export default function ActiveMembers(props) {

    return (
        <div>
            <div class="gallery">
                {props.info.map((bro, i) => {
                    return (
                    <span style={{ "--i": (i + 1) }}>
                        <img src={bro["pic-link"]} alt="" />
                    </span>)
                })}
                <span style={{ "--i": (props.info.length + 1) }}>
                    <img src="/activeMembers/group.JPG" alt="" />
                </span>
                <span style={{ "--i": (props.info.length + 2) }}>
                    <img src="/activeMembers/group2.JPG" alt="" />
                </span>
            </div>
        </div>
    )
}