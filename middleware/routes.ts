const parentRoutes = [{ currentPath: '/playlist', defaultPath: '/' }]

export default (context: any) => {
  const exist = parentRoutes.find(
    (route) => route.currentPath === context.route.fullPath
  )

  if (exist) context.redirect(exist.defaultPath)
}
