// This is the "Offline page" service worker

// Install stage sets up the offline page in the cache and opens a new cache

var filesToCache = [
  '/*'
]

// This is the "Offline page" service worker

// Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('pwabuilder-offline').then(function (cache) {
      return cache.addAll(filesToCache)
    })
  )
})

// If any fetch fails, it will show the offline page.
// Maybe this should be limited to HTML documents?
self.addEventListener('fetch', function (event) {
  console.log(event.request.url)
  event.respondWith(
    fetch(event.request).catch(function (error) {
      console.error('[PWA Builder] Network request Failed. Serving offline page ' + event.request.url)
      return caches.open('pwabuilder-offline').then(function (cache) {
        console.log('fetched offline page')
        return cache.match(filesToCache)
      })
    }
    ))
})

// This is a event that can be fired from your page to tell the SW to update the offline page
self.addEventListener('refreshOffline', function (response) {
  return caches.open('pwabuilder-offline').then(function (cache) {
    console.log('[PWA Builder] Offline page updated from refreshOffline event: ' + response.url)
    return cache.put('/static/offline.html', response)
  })
})
