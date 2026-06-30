import { Link } from 'react-router-dom'

const maps = [
  { href: '/kings', label: 'Glorious Kings', sub: '王者荣耀·英雄地图' },
  { href: '/swordsmen', label: 'Smiling Swordsmen', sub: '在地图上重读《笑傲江湖》' },
  { href: '/spanish-california', label: 'Spanish Missions', sub: 'California mission chain on Mapbox Outdoors' },
  { href: '/deck-tests', label: '黄金大劫案', sub: 'Deck.gl arc map' },
  { href: '/liancheng', label: '连城诀', sub: 'Deck.gl arc map' },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-2xl mx-auto w-full px-6 pt-12 pb-16 flex-1">
        <div className="mb-10">
          <h1 className="text-3xl font-bold leading-tight">Map Fun</h1>
          <p className="mt-1 text-sm text-muted-foreground">Historical and data maps, split out of upstream.land.</p>
        </div>

        <ul className="grid gap-2">
          {maps.map((p) => (
            <li key={p.href}>
              <Link
                to={p.href}
                className="flex items-baseline justify-between px-4 py-3 rounded-md border border-border text-foreground text-[15px] no-underline hover:bg-muted transition-colors"
              >
                <span>{p.label}</span>
                <span className="text-xs text-muted-foreground ml-3 shrink-0">{p.sub}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
