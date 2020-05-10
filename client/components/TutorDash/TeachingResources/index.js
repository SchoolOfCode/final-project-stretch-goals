import css from "./TeachingResources.module.css";
import LinkWindow from "./LinkWindow";
import zoom from "../../../images/zoom.png";
import hangouts from "../../../images/hangouts.png";
import whereby from "../../../images/whereby.png";
import planbook from "../../../images/planbook.png";
import miro from "../../../images/miro.png";
import remind from "../../../images/remind.png";

const windows = [
  {
    resource: "Zoom",
    logo: zoom,
    url: "https://zoom.us/"
  },
  {
    resource: "Hangouts",
    logo: hangouts,
    url: "https://hangouts.google.com/"
  },
  {
    resource: "Whereby",
    logo: whereby,
    url: "https://whereby.com"
  },
  {
    resource: "Miro",
    logo: miro,
    url:
      "https://miro.com/l/remote-collaboration?utm_source=google&utm_medium=cpc&utm_campaign=Exp-S|GOO|NB|Tier1|EN-EN|OnlineWhiteboard|BMM&utm_term=+online%20+whiteboard&utm_content=433955115780&xuid=CjwKCAjwqdn1BRBREiwAEbZcR9RNW5yoswxpds8g-0jZW1xIujVhvIrZsMMrjDVePKqhQ5LtZOjHdhoCxh0QAvD_BwE&gclid=CjwKCAjwqdn1BRBREiwAEbZcR9RNW5yoswxpds8g-0jZW1xIujVhvIrZsMMrjDVePKqhQ5LtZOjHdhoCxh0QAvD_BwE"
  },
  {
    resource: "Plan Book",
    logo: planbook,
    url: "https://planbook.com/"
  },
  {
    resource: "Remind",
    logo: remind,
    url: "https://www.remind.com/"
  }
];

export default function TeachingResources() {
  return (
    <>
      <div className={css.mainContainer}>
        {windows.map(item => {
          return (
            <div className={css.gridItem}>
              <LinkWindow
                logo={item.logo}
                resource={item.resource}
                url={item.url}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
