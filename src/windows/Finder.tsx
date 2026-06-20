import { locations } from "#/constants"
import WindowWrapper from "#/hoc/WindowWrapper"
import useLocationStore from "#/store/location"
import mergeClass from "#/utility/tailwindMerge"
import type { Location } from "#/types"
import { WindowControls } from "#components"
import { Search } from "lucide-react"
import useWindowStore from "#/store/window"

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item: Location) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank", "noopener,noreferrer");
    openWindow(`${item.fileType}${item.kind}`, item);
  }

  const renderList = (name: string, items: Location[] = []) => (
    <div>
      <h3>
        {name}
      </h3>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={mergeClass(item.id === activeLocation?.id ? "active" : "not-active")}>
            <button onClick={() => setActiveLocation(item)} className="w-full text-left flex items-center gap-2 leading-none">
              <img src={item.icon} alt={item.name} className="size-4 shrink-0 object-contain" />
              <p className="text-sm font-medium truncate leading-none">{item.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("My Projects", locations?.work?.children) ?? []}
        </div>
        <ul className="content">
          {activeLocation?.children?.map((item) => (
            <li key={item.id} className={mergeClass(item?.position)} onClick={() => openItem(item)}>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const FinderWindow = WindowWrapper({
  Component: Finder,
  windowKey: "finder",
})

export default FinderWindow