import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, accordionClasses } from "@mui/joy"
import { ProfileProps } from "../helpers/data"
import { vkSVG } from "../helpers/icons"
import { Typography } from "@mui/material"

export default function Profile({ index, filteredArray }: ProfileProps) {
  let displayedProfile
  if (filteredArray[0].category === "S") {
    displayedProfile = (
      <>
        <div className="cat-profile">
          <div className="flex-profile">
            <img className="profile-picture" src={`/images/searching/${filteredArray[index].img}.jpg`} alt="Cat's profile picture" loading="lazy" />
            <div>
              <a target="_blank" href={filteredArray[index].vk}>
                <h2 className="cat-name">
                  {filteredArray[index].name}
                  {vkSVG}
                </h2>
              </a>

              <div className="cat-facts">
                <Typography variant="subtitle1">
                  <div>Возраст: {filteredArray[index].age}</div>
                  {filteredArray[index].basics.split("/").map((info, index) => {
                    return <div key={index}>{info}</div>
                  })}
                </Typography>
              </div>

              <div className="cat-body">
                <Typography variant="body1">{filteredArray[index].bio}</Typography>
              </div>
            </div>
          </div>
          <AccordionGroup
            sx={{
              maxWidth: "100%",
              [`& .${accordionClasses.root}`]: {
                marginTop: "0.5rem",
                transition: "0.2s ease",
                '& button:not([aria-expanded="true"])': {
                  transition: "0.2s ease",
                  paddingBottom: "0.625rem",
                },
                "& button": {
                  color: "#999",
                },
                "& button:hover": {
                  color: "#111",
                  background: "#f6b3ffd8",
                },
              },
              [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
                "& button": {
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  color: "#111",
                },
                bgcolor: "background.level1",
                borderRadius: "md",
                borderBottom: "1px solid",
              },
              '& [aria-expanded="true"]': {
                boxShadow: (theme) => `inset 0 -1px 0 ${theme.vars.palette.divider}`,
              },
            }}>
            <Accordion>
              <AccordionSummary>🐱🏠 По вопросам укотовления</AccordionSummary>
              <AccordionDetails>
                <div>
                  <b>Карина: </b>
                  <a className="accordion-link" target="_blank" href="https://vk.com/id3143498">
                    ВКонтакте🔗
                  </a>
                  <a className="accordion-link" target="_blank" href="https://t.me/+79101364424">
                    Телеграм🔗
                  </a>
                </div>
                <div>
                  <b>Юлия: </b>
                  <a className="accordion-link" target="_blank" href="https://vk.com/id17502407">
                    ВКонтакте🔗
                  </a>
                </div>
                <span>
                  🌟 Больше информации о котиках и нашем приюте вы можете найти{" "}
                  <a className="accordion-link" target="_blank" href="https://vk.com/prosto__koshki">
                    в нашей группе VK
                  </a>{" "}
                  или{" "}
                  <a className="accordion-link" target="_blank" href="https://instagram.com/prosto_koshki?igshid=MzRlODBiNWFlZA==">
                    в нашем Instagram аккаунте!
                  </a>
                </span>
              </AccordionDetails>
            </Accordion>
          </AccordionGroup>
        </div>
      </>
    )
  } else {
    displayedProfile = (
      <>
        <div className="cat-profile">
          <div className="flex-profile">
            <img className="profile-picture" src={`/images/found_home/${filteredArray[index].img}.jpg`} alt="Cat's profile picture" loading="lazy" />
            <div>
              <h2 className="cat-name">{filteredArray[index].name}</h2>
              <div className="cat-body">
                <Typography variant="body1">{filteredArray[index].bio}</Typography>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  return displayedProfile
}
