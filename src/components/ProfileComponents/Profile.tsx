import { ProfileProps } from "../../helpers/interfaces"
import { vkSVG } from "../../helpers/icons"
import { Tooltip, Typography } from "@mui/material"
import { CatPosition, HeartIconProfile, NavigationArrows, GetCatHomeAccordion } from "./ProfileNavigation"
import { SearchPageStore } from "../../stores/SearchPageStore"
import { ProfileLink, CatProfile } from "../../themes/styledComponents"

export default function Profile({ handleFavCats, favCats, filteredArray }: ProfileProps) {
  const { index, setIndex } = SearchPageStore()
  const disableLeftArrow = index < 1
  const disableRightArrow = index === filteredArray.length - 1
  const category = filteredArray[0].category === "S" ? "/images/searching/" : "/images/found_home/"

  // * If we are dealing with the HomeCats array then render this, else...
  if (filteredArray[0].category === "S") {
    return (
      <>
        <CatProfile elevation={3}>
          <HeartIconProfile isFavorite={favCats.includes(filteredArray[index].img)} onClick={() => handleFavCats(filteredArray[index].img)} />

          <NavigationArrows
            disableLeftArrow={disableLeftArrow}
            disableRightArrow={disableRightArrow}
            prevCat={() => setIndex(index - 1)}
            nextCat={() => setIndex(index + 1)}
          />

          <div className="flex-profile">
            <img className="profile-picture" src={`${category + filteredArray[index].img}.jpg`} alt="Cat's profile picture" loading="lazy" />
            <div>
              <Tooltip title="Больше фото в группе ВКонтакте по ссылке!">
                <ProfileLink target="_blank" href={filteredArray[index].vk}>
                  {filteredArray[index].name}
                  {vkSVG}
                </ProfileLink>
              </Tooltip>

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

          <CatPosition index={index} arrayLength={filteredArray.length} />
        </CatProfile>
      </>
    )
  } else {
    return (
      <>
        <CatProfile elevation={3}>
          <HeartIconProfile isFavorite={favCats.includes(filteredArray[index].img)} onClick={() => handleFavCats(filteredArray[index].img)} />

          <NavigationArrows
            disableLeftArrow={disableLeftArrow}
            disableRightArrow={disableRightArrow}
            prevCat={() => setIndex(index - 1)}
            nextCat={() => setIndex(index + 1)}
          />

          <div className="flex-profile">
            <img className="profile-picture" src={`${category + filteredArray[index].img}.jpg`} alt="Cat's profile picture" loading="lazy" />
            <div>
              <h2 className="cat-name">{filteredArray[index].name}</h2>
              <div className="cat-body">
                <Typography variant="body1">{filteredArray[index].bio}</Typography>
              </div>
            </div>
          </div>

          <div className="flex-row-center">
            <CatPosition index={index} arrayLength={filteredArray.length} />
          </div>
        </CatProfile>
      </>
    )
  }
}
