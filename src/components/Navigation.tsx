// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"
// import { Search } from 'lucide-react'

// export function Nav() {
//   return (
//     <header className="border-b">
//       <div className="flex h-16 items-center px-4 md:px-6">
//         <Link className="mr-6" href="#">
//           <GithubIcon className="h-8 w-8" />
//           <span className="sr-only">GitHub</span>
//         </Link>
//         <NavigationMenu className="hidden lg:flex">
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger>Product</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <div className="w-[400px] p-4">
//                   <NavigationMenuLink asChild>
//                     <Link className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
//                       <div className="text-sm font-medium leading-none">Overview</div>
//                       <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                         See all GitHub has to offer
//                       </p>
//                     </Link>
//                   </NavigationMenuLink>
//                 </div>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <div className="w-[400px] p-4">
//                   <NavigationMenuLink asChild>
//                     <Link className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
//                       <div className="text-sm font-medium leading-none">For Teams</div>
//                       <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                         Build and ship software together
//                       </p>
//                     </Link>
//                   </NavigationMenuLink>
//                 </div>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger>Open Source</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <div className="w-[400px] p-4">
//                   <NavigationMenuLink asChild>
//                     <Link className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
//                       <div className="text-sm font-medium leading-none">GitHub Sponsors</div>
//                       <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                         Fund open source developers
//                       </p>
//                     </Link>
//                   </NavigationMenuLink>
//                 </div>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>
//         <div className="ml-auto flex items-center space-x-4">
//           <div className="hidden lg:flex lg:items-center lg:space-x-4">
//             <div className="relative">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 className="w-72 pl-8"
//                 placeholder="Search or jump to..."
//                 type="search"
//               />
//               <kbd className="pointer-events-none absolute right-2.5 top-2.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
//                 /
//               </kbd>
//             </div>
//             <Button variant="ghost">Sign in</Button>
//             <Button>Sign up</Button>
//           </div>
//         </div>
//       </div>
//       <nav className="border-b px-4 py-2 md:px-6">
//         <ul className="flex items-center space-x-4 text-sm font-medium">
//           <li>
//             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="#">Features</Link>
//           </li>
//           <li>
//             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="#">Copilot</Link>
//           </li>
//           <li>
//             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="#">Security</Link>
//           </li>
//           <li>
//             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="#">Actions</Link>
//           </li>
//           <li>
//             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="#">Codespaces</Link>
//           </li>
//           <li>
//             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="#">Issues</Link>
//           </li>
//           <li>
//             <Link className="text-muted-foreground transition-colors hover:text-foreground" href="#">Code Review</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   )
// }

// function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//       <path d="M9 18c-4.51 2-5-2-7-2" />
//     </svg>
//   )
// }

