import React from 'react'
import { img_300, unavailable } from '../../Config/Config';
import "./SoloContent.css";
import { Badge } from "@material-ui/core";
import ContentModal from '../Modal/ContentModal'

const SoloContent = ({id,poster,title,media_type,date,vote}) => {
  return(
    <ContentModal media_type={media_type} id={id}>
    <Badge
      badgeContent={vote}
      color={vote > 6 ? "primary" : "secondary"}
    />
    <img
      className="poster"
      src={poster ? `${img_300}${poster}` : unavailable}
      alt={title}
    />
    <b className="title">{title}</b>
    <span className="type">
      {media_type === "tv" ? "TV Series" : "Movie"}
      <span className="type">{date}</span>
    </span>
  </ContentModal>
  )
}

export default SoloContent
