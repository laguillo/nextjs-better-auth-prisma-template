import { Database, LayoutDashboard, Lock, Settings, Users } from 'lucide-react';

const NAV = [
  { label: 'Dashboard', active: true, icon: LayoutDashboard },
  { label: 'Members', active: false, icon: Users },
  { label: 'Database', active: false, icon: Database },
  { label: 'Settings', active: false, icon: Settings }
];

const STATS = [
  { label: 'Users', value: '2,847', delta: '+12%' },
  { label: 'MRR', value: '$8.2k', delta: '+4%' },
  { label: 'Sessions', value: '19.4k', delta: null }
];

const BARS = [38, 52, 44, 61, 48, 70, 58, 76, 66, 84, 72, 92];

const USERS = [
  { initials: 'AC', name: 'Alex Chen', role: 'Owner' },
  { initials: 'SJ', name: 'Sarah Jenkins', role: 'Admin' },
  { initials: 'MR', name: 'Marco Rossi', role: 'Member' }
];

/** Illustrative preview of the included dashboards (demo data). */
export function AppMock() {
  return (
    <div className='relative'>
      <div className='absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-br from-violet-500/20 via-fuchsia-500/10 to-sky-500/20 blur-2xl' />
      <div className='border-border bg-card overflow-hidden rounded-2xl border shadow-2xl'>
        {/* browser chrome */}
        <div className='border-border bg-muted/40 flex h-10 items-center gap-2 border-b px-3.5'>
          <div className='flex gap-2'>
            <i className='size-3 rounded-full bg-red-400/80' />
            <i className='size-3 rounded-full bg-amber-400/80' />
            <i className='size-3 rounded-full bg-emerald-400/80' />
          </div>
          <div className='border-border bg-background text-muted-foreground mx-auto flex h-6 items-center gap-1.5 rounded-full border px-3 font-mono text-[0.7rem]'>
            <Lock className='size-3' />
            your-app.up.railway.app/dashboard
          </div>
          <span className='w-11' />
        </div>

        <div className='grid min-h-96 grid-cols-[176px_1fr] max-sm:grid-cols-1'>
          {/* sidebar */}
          <aside className='border-border bg-muted/25 hidden border-r p-3 sm:flex sm:flex-col sm:gap-1'>
            <div className='mb-2 flex items-center gap-2.5 px-2 py-1.5'>
              <span className='grid size-6.5 place-items-center rounded-lg bg-linear-to-br from-violet-500 to-fuchsia-500 text-[0.7rem] font-semibold text-white'>
                A
              </span>
              <b className='text-[0.82rem] font-[550]'>Acme Inc.</b>
            </div>
            {NAV.map(({ label, active, icon: Icon }) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.8rem] font-[450] ${
                  active
                    ? 'bg-background text-foreground font-medium shadow-sm'
                    : 'text-muted-foreground'
                }`}
              >
                <Icon className='size-4' />
                {label}
              </div>
            ))}
            <div className='mt-auto flex items-center gap-2 px-2.5 py-2'>
              <span className='bg-muted text-muted-foreground grid size-5.5 place-items-center rounded-full text-[0.6rem] font-semibold'>
                JL
              </span>
              <span className='text-muted-foreground truncate text-[0.78rem]'>
                jane@acme.co
              </span>
            </div>
          </aside>

          {/* main */}
          <div className='p-5'>
            <div className='mb-4 flex items-center justify-between'>
              <h3 className='text-[1.05rem] font-semibold tracking-[-0.02em]'>
                Dashboard
              </h3>
              <span className='border-border text-muted-foreground inline-flex h-8 cursor-default items-center rounded-lg border px-3 text-[0.78rem]'>
                + Invite
              </span>
            </div>

            <div className='mb-4 grid grid-cols-3 gap-3 max-sm:grid-cols-2'>
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`border-border bg-background rounded-xl border p-3 ${
                    i === STATS.length - 1 ? 'max-sm:col-span-2' : ''
                  }`}
                >
                  <div className='text-muted-foreground text-[0.68rem] tracking-[0.04em] uppercase'>
                    {s.label}
                  </div>
                  <div className='mt-1 text-[1.25rem] font-semibold tracking-[-0.03em]'>
                    {s.value}
                    {s.delta && (
                      <small className='ml-1 text-[0.68rem] font-medium text-emerald-500'>
                        {s.delta}
                      </small>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* signups chart */}
            <div className='border-border bg-background mb-4 rounded-xl border p-3'>
              <div className='text-muted-foreground mb-2 flex items-center justify-between text-[0.68rem] tracking-[0.04em] uppercase'>
                <span>Signups</span>
                <span className='normal-case'>last 12 weeks</span>
              </div>
              <div className='flex h-14 items-end gap-1.5'>
                {BARS.map((h, i) => (
                  <span
                    key={i}
                    className='flex-1 rounded-sm bg-linear-to-t from-violet-500/40 to-fuchsia-500/80'
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className='border-border bg-background overflow-hidden rounded-xl border'>
              <div className='text-muted-foreground border-border bg-muted/40 grid grid-cols-[1fr_80px_70px] items-center border-b px-3.5 py-2 text-[0.66rem] tracking-[0.04em] uppercase'>
                <span>User</span>
                <span>Role</span>
                <span>Status</span>
              </div>
              {USERS.map((u) => (
                <div
                  key={u.name}
                  className='border-border grid grid-cols-[1fr_80px_70px] items-center border-t px-3.5 py-2 text-[0.76rem]'
                >
                  <span className='flex items-center gap-2'>
                    <span className='bg-muted text-muted-foreground grid size-5.5 place-items-center rounded-full text-[0.6rem] font-semibold'>
                      {u.initials}
                    </span>
                    <span className='font-[450]'>{u.name}</span>
                  </span>
                  <span className='text-muted-foreground'>{u.role}</span>
                  <span className='border-border inline-flex w-fit items-center gap-1 rounded-full border px-2 py-0.5 text-[0.64rem] font-medium text-emerald-700 dark:text-emerald-400'>
                    <i className='inline-block size-1.25 rounded-full bg-emerald-500' />
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
