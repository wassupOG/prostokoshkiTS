import { ProfileProps } from "../../helpers/interfaces"
import { vkSVG } from "../../helpers/icons"
import { Tooltip, Typography } from "@mui/material"
import { CatPosition, GetCatHomeAccordion, HeartIconProfile, NavigationArrows } from "./ProfileNavigation"
import { SearchPageStore } from "../../stores/SearchPageStore"

export default function Profile({ handleFavCats, favCats, filteredArray }: ProfileProps) {
  const { index, setIndex } = SearchPageStore()
  const disableLeftArrow = index < 1
  const disableRightArrow = index === filteredArray.length - 1

  // * If we are dealing with the HomeCats array then render this, else...
  if (filteredArray[0].category === "S") {
    return (
      <>
        <div className="cat-profile">
          <CatPosition index={index} arrayLength={filteredArray.length} />
          <HeartIconProfile isFavorite={favCats.includes(filteredArray[index].img)} onClick={() => handleFavCats(filteredArray[index].img)} />

          <NavigationArrows
            disableLeftArrow={disableLeftArrow}
            disableRightArrow={disableRightArrow}
            prevCat={() => setIndex(index - 1)}
            nextCat={() => setIndex(index + 1)}
          />

          <div className="flex-profile">
            <img className="profile-picture" src={`/images/searching/${filteredArray[index].img}.jpg`} alt="Cat's profile picture" loading="lazy" />
            <div>
              <a target="_blank" href={filteredArray[index].vk}>
                <Tooltip title="Больше фото в группе ВКонтакте по ссылке!">
                  <h2 className="cat-name">
                    {filteredArray[index].name}
                    {vkSVG}
                  </h2>
                </Tooltip>
              </a>

              <div className="cat-facts">
                <Typography variant="subtitle1">
                  <div>Возраст: {filteredArray[index].age}</div>
                  {filteredArray[index].basics!.split("/").map((info: string, index: number) => {
                    return <div key={index}>{info}</div>
                  })}
                </Typography>
              </div>

              <div className="cat-body">
                <Typography variant="body1">{filteredArray[index].bio}</Typography>
              </div>
            </div>
          </div>

          <GetCatHomeAccordion />
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="cat-profile">
          <HeartIconProfile isFavorite={favCats.includes(filteredArray[index].img)} onClick={() => handleFavCats(filteredArray[index].img)} />

          <NavigationArrows
            disableLeftArrow={disableLeftArrow}
            disableRightArrow={disableRightArrow}
            prevCat={() => setIndex(index - 1)}
            nextCat={() => setIndex(index + 1)}
          />

          <div className="flex-profile">
            <img className="profile-picture" src={`/images/found_home/${filteredArray[index].img}.jpg`} alt="Cat's profile picture" loading="lazy" />
            <div>
              <h2 className="cat-name">{filteredArray[index].name}</h2>
              <div className="cat-body">
                <Typography variant="body1">{filteredArray[index].bio}</Typography>
              </div>
            </div>
          </div>

          <CatPosition index={index} arrayLength={filteredArray.length} />
        </div>
      </>
    )
  }
}
