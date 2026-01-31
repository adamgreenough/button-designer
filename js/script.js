// Material Symbols icon data with tags for better search
// This is a comprehensive list with search tags based on Google's Material Icons metadata
const materialIcons = [
	// Action icons
	{ name: "home", tags: ["house", "building", "main", "start"], category: "action" },
	{ name: "search", tags: ["find", "look", "magnify", "query"], category: "action" },
	{ name: "settings", tags: ["gear", "cog", "preferences", "options", "config"], category: "action" },
	{ name: "favorite", tags: ["heart", "love", "like", "bookmark"], category: "action" },
	{ name: "star", tags: ["rate", "rating", "favorite", "bookmark"], category: "action" },
	{ name: "delete", tags: ["trash", "remove", "bin", "garbage"], category: "action" },
	{ name: "add", tags: ["plus", "new", "create", "insert"], category: "action" },
	{ name: "remove", tags: ["minus", "subtract", "delete"], category: "action" },
	{ name: "check", tags: ["done", "complete", "tick", "ok", "yes"], category: "action" },
	{ name: "close", tags: ["x", "cancel", "exit", "dismiss"], category: "action" },
	{ name: "menu", tags: ["hamburger", "navigation", "list"], category: "action" },
	{ name: "more_vert", tags: ["dots", "options", "overflow", "kebab"], category: "action" },
	{ name: "more_horiz", tags: ["dots", "options", "overflow", "ellipsis"], category: "action" },
	{ name: "refresh", tags: ["reload", "sync", "update"], category: "action" },
	{ name: "download", tags: ["save", "export", "get"], category: "action" },
	{ name: "upload", tags: ["send", "import", "add"], category: "action" },
	{ name: "share", tags: ["send", "social", "forward"], category: "action" },
	{ name: "edit", tags: ["pencil", "modify", "change", "write"], category: "action" },
	{ name: "content_copy", tags: ["copy", "duplicate", "clone"], category: "action" },
	{ name: "content_paste", tags: ["paste", "clipboard", "insert"], category: "action" },
	{ name: "content_cut", tags: ["cut", "scissors", "remove"], category: "action" },
	{ name: "undo", tags: ["back", "revert", "previous"], category: "action" },
	{ name: "redo", tags: ["forward", "repeat"], category: "action" },
	{ name: "save", tags: ["disk", "floppy", "store"], category: "action" },
	{ name: "print", tags: ["printer", "document"], category: "action" },
	{ name: "send", tags: ["email", "message", "arrow"], category: "action" },
	{ name: "login", tags: ["signin", "enter", "account"], category: "action" },
	{ name: "logout", tags: ["signout", "exit", "leave"], category: "action" },
	{ name: "lock", tags: ["security", "password", "secure"], category: "action" },
	{ name: "lock_open", tags: ["unlock", "security", "open"], category: "action" },
	{ name: "visibility", tags: ["eye", "view", "show", "visible"], category: "action" },
	{ name: "visibility_off", tags: ["eye", "hide", "hidden", "invisible"], category: "action" },
	{ name: "filter_list", tags: ["sort", "organize", "funnel"], category: "action" },
	{ name: "sort", tags: ["order", "arrange", "organize"], category: "action" },
	{ name: "expand_more", tags: ["arrow", "down", "chevron", "dropdown"], category: "action" },
	{ name: "expand_less", tags: ["arrow", "up", "chevron"], category: "action" },
	{ name: "chevron_right", tags: ["arrow", "next", "forward"], category: "action" },
	{ name: "chevron_left", tags: ["arrow", "back", "previous"], category: "action" },
	{ name: "arrow_back", tags: ["left", "previous", "return"], category: "action" },
	{ name: "arrow_forward", tags: ["right", "next", "continue"], category: "action" },
	{ name: "arrow_upward", tags: ["up", "top"], category: "action" },
	{ name: "arrow_downward", tags: ["down", "bottom"], category: "action" },
	{ name: "open_in_new", tags: ["external", "link", "window", "tab"], category: "action" },
	{ name: "launch", tags: ["open", "external", "new window"], category: "action" },
	{ name: "fullscreen", tags: ["expand", "maximize", "enlarge"], category: "action" },
	{ name: "fullscreen_exit", tags: ["minimize", "shrink", "exit"], category: "action" },
	{ name: "zoom_in", tags: ["magnify", "enlarge", "bigger"], category: "action" },
	{ name: "zoom_out", tags: ["shrink", "smaller", "reduce"], category: "action" },
	{ name: "help", tags: ["question", "support", "info", "assistance"], category: "action" },
	{ name: "info", tags: ["information", "about", "details"], category: "action" },
	{ name: "language", tags: ["globe", "world", "translate", "international"], category: "action" },
	{ name: "build", tags: ["tool", "wrench", "repair", "fix"], category: "action" },
	{ name: "code", tags: ["programming", "developer", "brackets"], category: "action" },
	{ name: "terminal", tags: ["command", "console", "shell", "cli"], category: "action" },
	{ name: "bug_report", tags: ["error", "issue", "debug", "problem"], category: "action" },
	{ name: "dashboard", tags: ["panel", "overview", "control"], category: "action" },
	{ name: "analytics", tags: ["chart", "graph", "statistics", "data"], category: "action" },
	{ name: "schedule", tags: ["time", "clock", "calendar", "timer"], category: "action" },
	{ name: "history", tags: ["time", "past", "recent", "clock"], category: "action" },
	{ name: "bookmark", tags: ["save", "favorite", "flag"], category: "action" },
	{ name: "bookmarks", tags: ["saved", "favorites", "collection"], category: "action" },
	{ name: "label", tags: ["tag", "category", "badge"], category: "action" },
	{ name: "extension", tags: ["plugin", "addon", "puzzle"], category: "action" },
	{ name: "verified", tags: ["check", "approved", "authentic", "badge"], category: "action" },
	{ name: "trending_up", tags: ["chart", "growth", "increase", "arrow"], category: "action" },
	{ name: "trending_down", tags: ["chart", "decline", "decrease", "arrow"], category: "action" },
	{ name: "power_settings_new", tags: ["on", "off", "shutdown", "power"], category: "action" },
	
	// Alert icons
	{ name: "warning", tags: ["alert", "caution", "danger", "exclamation"], category: "alert" },
	{ name: "error", tags: ["alert", "problem", "issue", "circle"], category: "alert" },
	{ name: "notification_important", tags: ["alert", "bell", "urgent"], category: "alert" },
	{ name: "notifications", tags: ["bell", "alert", "reminder"], category: "alert" },
	{ name: "notifications_active", tags: ["bell", "ringing", "alert"], category: "alert" },
	{ name: "notifications_off", tags: ["bell", "mute", "silent"], category: "alert" },
	{ name: "do_not_disturb", tags: ["mute", "silent", "quiet", "dnd"], category: "alert" },
	{ name: "priority_high", tags: ["important", "urgent", "exclamation"], category: "alert" },
	{ name: "report", tags: ["flag", "issue", "problem"], category: "alert" },
	{ name: "new_releases", tags: ["new", "badge", "star"], category: "alert" },
	
	// AV (Audio/Video) icons
	{ name: "play_arrow", tags: ["start", "begin", "video", "media"], category: "av" },
	{ name: "pause", tags: ["stop", "wait", "hold"], category: "av" },
	{ name: "stop", tags: ["end", "halt", "square"], category: "av" },
	{ name: "skip_next", tags: ["forward", "next track"], category: "av" },
	{ name: "skip_previous", tags: ["back", "previous track"], category: "av" },
	{ name: "fast_forward", tags: ["speed", "forward", "skip"], category: "av" },
	{ name: "fast_rewind", tags: ["back", "rewind", "reverse"], category: "av" },
	{ name: "replay", tags: ["repeat", "restart", "again"], category: "av" },
	{ name: "shuffle", tags: ["random", "mix"], category: "av" },
	{ name: "repeat", tags: ["loop", "cycle", "again"], category: "av" },
	{ name: "repeat_one", tags: ["loop", "single", "one"], category: "av" },
	{ name: "volume_up", tags: ["sound", "audio", "loud", "speaker"], category: "av" },
	{ name: "volume_down", tags: ["sound", "audio", "quiet", "speaker"], category: "av" },
	{ name: "volume_mute", tags: ["sound", "audio", "silent", "speaker"], category: "av" },
	{ name: "volume_off", tags: ["mute", "silent", "no sound"], category: "av" },
	{ name: "mic", tags: ["microphone", "record", "audio", "voice"], category: "av" },
	{ name: "mic_off", tags: ["microphone", "mute", "silent"], category: "av" },
	{ name: "videocam", tags: ["camera", "video", "record", "film"], category: "av" },
	{ name: "videocam_off", tags: ["camera", "video", "disabled"], category: "av" },
	{ name: "movie", tags: ["film", "video", "cinema"], category: "av" },
	{ name: "music_note", tags: ["audio", "song", "sound"], category: "av" },
	{ name: "queue_music", tags: ["playlist", "songs", "list"], category: "av" },
	{ name: "playlist_play", tags: ["music", "queue", "list"], category: "av" },
	{ name: "radio", tags: ["music", "broadcast", "fm"], category: "av" },
	{ name: "podcasts", tags: ["audio", "show", "broadcast", "podcast"], category: "av" },
	{ name: "equalizer", tags: ["audio", "music", "bars", "levels"], category: "av" },
	{ name: "album", tags: ["music", "record", "disc"], category: "av" },
	{ name: "library_music", tags: ["collection", "songs", "audio"], category: "av" },
	{ name: "headphones", tags: ["audio", "music", "listen", "earphones"], category: "av" },
	{ name: "headset_mic", tags: ["audio", "support", "call center"], category: "av" },
	{ name: "speaker", tags: ["audio", "sound", "music"], category: "av" },
	{ name: "cast", tags: ["chromecast", "stream", "tv"], category: "av" },
	{ name: "live_tv", tags: ["broadcast", "television", "stream"], category: "av" },
	{ name: "subscriptions", tags: ["youtube", "channel", "follow"], category: "av" },
	{ name: "video_library", tags: ["collection", "movies", "videos"], category: "av" },
	{ name: "theaters", tags: ["cinema", "movie", "film"], category: "av" },
	{ name: "subtitles", tags: ["captions", "text", "closed captions"], category: "av" },
	{ name: "high_quality", tags: ["quality", "resolution", "high definition", "hd"], category: "av" },
	{ name: "speed", tags: ["fast", "playback", "rate"], category: "av" },
	{ name: "slow_motion_video", tags: ["speed", "playback", "slow"], category: "av" },
	
	// Communication icons
	{ name: "chat", tags: ["message", "talk", "conversation", "bubble"], category: "communication" },
	{ name: "chat_bubble", tags: ["message", "talk", "conversation"], category: "communication" },
	{ name: "forum", tags: ["chat", "discussion", "messages"], category: "communication" },
	{ name: "message", tags: ["text", "sms", "chat"], category: "communication" },
	{ name: "mail", tags: ["email", "envelope", "letter", "inbox"], category: "communication" },
	{ name: "email", tags: ["mail", "envelope", "message"], category: "communication" },
	{ name: "inbox", tags: ["email", "mail", "messages"], category: "communication" },
	{ name: "drafts", tags: ["email", "mail", "pending"], category: "communication" },
	{ name: "mark_email_read", tags: ["mail", "read", "done"], category: "communication" },
	{ name: "mark_email_unread", tags: ["mail", "new", "unread"], category: "communication" },
	{ name: "call", tags: ["phone", "telephone", "contact"], category: "communication" },
	{ name: "phone", tags: ["call", "telephone", "contact"], category: "communication" },
	{ name: "phone_enabled", tags: ["call", "active", "on"], category: "communication" },
	{ name: "phone_disabled", tags: ["call", "inactive", "off"], category: "communication" },
	{ name: "video_call", tags: ["camera", "meeting", "face time"], category: "communication" },
	{ name: "contacts", tags: ["people", "address book", "phone book"], category: "communication" },
	{ name: "contact_page", tags: ["person", "profile", "info"], category: "communication" },
	{ name: "person_add", tags: ["user", "new", "friend", "follow"], category: "communication" },
	{ name: "group_add", tags: ["people", "team", "invite"], category: "communication" },
	{ name: "comment", tags: ["message", "feedback", "note"], category: "communication" },
	{ name: "feedback", tags: ["comment", "response", "review"], category: "communication" },
	{ name: "question_answer", tags: ["chat", "faq", "support"], category: "communication" },
	{ name: "support_agent", tags: ["help", "customer service", "headset"], category: "communication" },
	{ name: "campaign", tags: ["megaphone", "announcement", "marketing"], category: "communication" },
	{ name: "announcement", tags: ["news", "broadcast", "alert"], category: "communication" },
	{ name: "rss_feed", tags: ["news", "subscribe", "feed"], category: "communication" },
	{ name: "alternate_email", tags: ["at", "email", "address"], category: "communication" },
	{ name: "textsms", tags: ["message", "sms", "chat"], category: "communication" },
	{ name: "voicemail", tags: ["message", "audio", "phone"], category: "communication" },
	
	// Content icons
	{ name: "content_copy", tags: ["copy", "duplicate", "clipboard"], category: "content" },
	{ name: "content_cut", tags: ["cut", "scissors", "remove"], category: "content" },
	{ name: "content_paste", tags: ["paste", "clipboard", "insert"], category: "content" },
	{ name: "add_circle", tags: ["plus", "new", "create"], category: "content" },
	{ name: "remove_circle", tags: ["minus", "delete", "subtract"], category: "content" },
	{ name: "flag", tags: ["report", "mark", "country"], category: "content" },
	{ name: "link", tags: ["url", "chain", "connect"], category: "content" },
	{ name: "link_off", tags: ["unlink", "broken", "disconnect"], category: "content" },
	{ name: "attach_file", tags: ["paperclip", "attachment", "file"], category: "content" },
	{ name: "push_pin", tags: ["pin", "tack", "sticky"], category: "content" },
	{ name: "text_format", tags: ["font", "style", "format"], category: "content" },
	{ name: "format_bold", tags: ["text", "style", "font"], category: "content" },
	{ name: "format_italic", tags: ["text", "style", "font"], category: "content" },
	{ name: "format_underlined", tags: ["text", "style", "font"], category: "content" },
	{ name: "format_color_fill", tags: ["paint", "bucket", "fill"], category: "content" },
	{ name: "format_color_text", tags: ["text", "color", "font"], category: "content" },
	{ name: "format_list_bulleted", tags: ["list", "bullets", "ul"], category: "content" },
	{ name: "format_list_numbered", tags: ["list", "numbers", "ol"], category: "content" },
	{ name: "format_quote", tags: ["quotation", "cite", "blockquote"], category: "content" },
	{ name: "format_align_left", tags: ["text", "align", "justify"], category: "content" },
	{ name: "format_align_center", tags: ["text", "align", "center"], category: "content" },
	{ name: "format_align_right", tags: ["text", "align", "justify"], category: "content" },
	{ name: "title", tags: ["heading", "text", "headline"], category: "content" },
	{ name: "notes", tags: ["text", "document", "lines"], category: "content" },
	{ name: "article", tags: ["document", "text", "blog"], category: "content" },
	{ name: "description", tags: ["document", "file", "text"], category: "content" },
	{ name: "inventory", tags: ["box", "package", "stock"], category: "content" },
	{ name: "receipt", tags: ["bill", "invoice", "document"], category: "content" },
	{ name: "tag", tags: ["label", "price", "badge"], category: "content" },
	{ name: "sell", tags: ["tag", "price", "sale"], category: "content" },
	{ name: "block", tags: ["ban", "prohibit", "stop"], category: "content" },
	{ name: "gesture", tags: ["draw", "line", "signature"], category: "content" },
	{ name: "reply", tags: ["arrow", "respond", "back"], category: "content" },
	{ name: "reply_all", tags: ["arrows", "respond", "email"], category: "content" },
	{ name: "forward", tags: ["arrow", "send", "share"], category: "content" },
	{ name: "move_to_inbox", tags: ["archive", "email", "folder"], category: "content" },
	{ name: "archive", tags: ["box", "store", "save"], category: "content" },
	{ name: "unarchive", tags: ["box", "restore", "retrieve"], category: "content" },
	{ name: "report", tags: ["flag", "issue", "alert"], category: "content" },
	{ name: "outlined_flag", tags: ["flag", "report", "mark"], category: "content" },
	
	// Device icons
	{ name: "smartphone", tags: ["phone", "mobile", "device", "iphone", "android"], category: "device" },
	{ name: "phone_iphone", tags: ["mobile", "apple", "ios"], category: "device" },
	{ name: "phone_android", tags: ["mobile", "google", "device"], category: "device" },
	{ name: "tablet", tags: ["ipad", "device", "screen"], category: "device" },
	{ name: "tablet_mac", tags: ["ipad", "apple", "device"], category: "device" },
	{ name: "laptop", tags: ["computer", "macbook", "notebook"], category: "device" },
	{ name: "laptop_mac", tags: ["macbook", "apple", "computer"], category: "device" },
	{ name: "laptop_windows", tags: ["pc", "microsoft", "computer"], category: "device" },
	{ name: "computer", tags: ["desktop", "pc", "monitor"], category: "device" },
	{ name: "desktop_mac", tags: ["imac", "apple", "computer"], category: "device" },
	{ name: "desktop_windows", tags: ["pc", "microsoft", "computer"], category: "device" },
	{ name: "monitor", tags: ["screen", "display", "tv"], category: "device" },
	{ name: "tv", tags: ["television", "screen", "display"], category: "device" },
	{ name: "connected_tv", tags: ["smart tv", "stream", "cast"], category: "device" },
	{ name: "watch", tags: ["time", "wearable", "smartwatch"], category: "device" },
	{ name: "keyboard", tags: ["type", "input", "keys"], category: "device" },
	{ name: "mouse", tags: ["click", "cursor", "input"], category: "device" },
	{ name: "gamepad", tags: ["controller", "game", "play", "joystick"], category: "device" },
	{ name: "sports_esports", tags: ["gaming", "controller", "video game"], category: "device" },
	{ name: "headset", tags: ["audio", "gaming", "vr"], category: "device" },
	{ name: "memory", tags: ["ram", "chip", "hardware"], category: "device" },
	{ name: "storage", tags: ["disk", "drive", "database"], category: "device" },
	{ name: "sd_card", tags: ["memory", "storage", "media"], category: "device" },
	{ name: "usb", tags: ["drive", "storage", "port"], category: "device" },
	{ name: "cable", tags: ["wire", "connect", "charger"], category: "device" },
	{ name: "battery_full", tags: ["power", "charge", "energy"], category: "device" },
	{ name: "battery_charging_full", tags: ["power", "charge", "energy"], category: "device" },
	{ name: "battery_alert", tags: ["low", "warning", "power"], category: "device" },
	{ name: "power", tags: ["plug", "electricity", "outlet"], category: "device" },
	{ name: "wifi", tags: ["internet", "wireless", "network", "connection"], category: "device" },
	{ name: "wifi_off", tags: ["internet", "disconnected", "offline"], category: "device" },
	{ name: "bluetooth", tags: ["wireless", "connect", "pair"], category: "device" },
	{ name: "bluetooth_connected", tags: ["wireless", "paired", "linked"], category: "device" },
	{ name: "nfc", tags: ["wireless", "tap", "contactless"], category: "device" },
	{ name: "gps_fixed", tags: ["location", "satellite", "navigation"], category: "device" },
	{ name: "location_on", tags: ["gps", "pin", "map", "place"], category: "device" },
	{ name: "location_off", tags: ["gps", "disabled", "private"], category: "device" },
	{ name: "screen_rotation", tags: ["rotate", "orientation", "mobile"], category: "device" },
	{ name: "screen_lock_rotation", tags: ["lock", "orientation", "mobile"], category: "device" },
	{ name: "brightness_high", tags: ["light", "display", "sun"], category: "device" },
	{ name: "brightness_low", tags: ["dim", "display", "dark"], category: "device" },
	{ name: "brightness_auto", tags: ["automatic", "display", "adaptive"], category: "device" },
	{ name: "flashlight_on", tags: ["light", "torch", "flash"], category: "device" },
	{ name: "flashlight_off", tags: ["light", "torch", "dark"], category: "device" },
	{ name: "developer_mode", tags: ["debug", "code", "settings"], category: "device" },
	{ name: "sim_card", tags: ["phone", "mobile", "carrier"], category: "device" },
	{ name: "signal_cellular_4_bar", tags: ["network", "mobile", "reception"], category: "device" },
	{ name: "network_wifi", tags: ["internet", "wireless", "signal"], category: "device" },
	{ name: "airplane_mode", tags: ["flight", "offline", "wireless"], category: "device" },
	{ name: "router", tags: ["wifi", "network", "internet"], category: "device" },
	{ name: "scanner", tags: ["print", "copy", "document"], category: "device" },
	{ name: "print", tags: ["printer", "document", "paper"], category: "device" },
	
	// File icons
	{ name: "folder", tags: ["directory", "files", "organize"], category: "file" },
	{ name: "folder_open", tags: ["directory", "files", "browse"], category: "file" },
	{ name: "create_new_folder", tags: ["directory", "add", "new"], category: "file" },
	{ name: "folder_shared", tags: ["directory", "share", "team"], category: "file" },
	{ name: "folder_special", tags: ["directory", "star", "favorite"], category: "file" },
	{ name: "folder_zip", tags: ["directory", "compress", "archive"], category: "file" },
	{ name: "insert_drive_file", tags: ["document", "page", "file"], category: "file" },
	{ name: "description", tags: ["document", "file", "text"], category: "file" },
	{ name: "article", tags: ["document", "blog", "text"], category: "file" },
	{ name: "note", tags: ["document", "sticky", "memo"], category: "file" },
	{ name: "note_add", tags: ["document", "new", "create"], category: "file" },
	{ name: "upload_file", tags: ["document", "import", "add"], category: "file" },
	{ name: "file_download", tags: ["document", "export", "save"], category: "file" },
	{ name: "file_upload", tags: ["document", "import", "send"], category: "file" },
	{ name: "file_copy", tags: ["document", "duplicate", "clone"], category: "file" },
	{ name: "file_present", tags: ["document", "attachment", "exists"], category: "file" },
	{ name: "attachment", tags: ["paperclip", "file", "attach"], category: "file" },
	{ name: "cloud", tags: ["storage", "online", "sync"], category: "file" },
	{ name: "cloud_upload", tags: ["storage", "sync", "save"], category: "file" },
	{ name: "cloud_download", tags: ["storage", "sync", "get"], category: "file" },
	{ name: "cloud_done", tags: ["storage", "synced", "complete"], category: "file" },
	{ name: "cloud_off", tags: ["storage", "offline", "disconnected"], category: "file" },
	{ name: "cloud_sync", tags: ["storage", "refresh", "update"], category: "file" },
	{ name: "picture_as_pdf", tags: ["document", "file", "adobe"], category: "file" },
	{ name: "text_snippet", tags: ["document", "code", "text"], category: "file" },
	{ name: "source", tags: ["code", "file", "document"], category: "file" },
	{ name: "code", tags: ["programming", "brackets", "developer"], category: "file" },
	{ name: "code_blocks", tags: ["code", "web", "markup", "html", "programming"], category: "file" },
	{ name: "integration_instructions", tags: ["code", "developer", "api", "sdk"], category: "file" },
	{ name: "terminal", tags: ["code", "command", "shell", "cli"], category: "file" },
	{ name: "data_object", tags: ["json", "code", "programming"], category: "file" },
	{ name: "data_array", tags: ["list", "code", "programming"], category: "file" },
	
	// Hardware icons
	{ name: "camera", tags: ["photo", "picture", "lens"], category: "hardware" },
	{ name: "camera_alt", tags: ["photo", "picture", "lens"], category: "hardware" },
	{ name: "photo_camera", tags: ["picture", "snapshot", "lens"], category: "hardware" },
	{ name: "videocam", tags: ["video", "camera", "film"], category: "hardware" },
	{ name: "mic", tags: ["microphone", "audio", "record"], category: "hardware" },
	{ name: "speaker", tags: ["audio", "sound", "music"], category: "hardware" },
	{ name: "headphones", tags: ["audio", "music", "listen"], category: "hardware" },
	{ name: "keyboard", tags: ["type", "input", "keys"], category: "hardware" },
	{ name: "mouse", tags: ["click", "cursor", "input"], category: "hardware" },
	{ name: "print", tags: ["printer", "document", "paper"], category: "hardware" },
	{ name: "scanner", tags: ["document", "copy", "digitize"], category: "hardware" },
	{ name: "memory", tags: ["ram", "chip", "cpu"], category: "hardware" },
	{ name: "sd_card", tags: ["card", "memory", "media", "storage"], category: "hardware" },
	{ name: "usb", tags: ["port", "cable", "connect"], category: "hardware" },
	{ name: "cable", tags: ["wire", "connect", "plug"], category: "hardware" },
	{ name: "power", tags: ["plug", "electricity", "outlet"], category: "hardware" },
	{ name: "battery_full", tags: ["power", "charge", "energy"], category: "hardware" },
	{ name: "lightbulb", tags: ["light", "idea", "lamp"], category: "hardware" },
	{ name: "flashlight_on", tags: ["light", "torch", "beam"], category: "hardware" },
	{ name: "router", tags: ["wifi", "network", "internet"], category: "hardware" },
	{ name: "sensors", tags: ["detect", "monitor", "iot"], category: "hardware" },
	{ name: "thermostat", tags: ["temperature", "climate", "home"], category: "hardware" },
	{ name: "smart_display", tags: ["screen", "alexa", "google home"], category: "hardware" },
	{ name: "smart_toy", tags: ["robot", "ai", "automation"], category: "hardware" },
	
	// Home icons
	{ name: "home", tags: ["house", "building", "main"], category: "home" },
	{ name: "house", tags: ["home", "building", "residence"], category: "home" },
	{ name: "apartment", tags: ["building", "flat", "condo"], category: "home" },
	{ name: "cottage", tags: ["house", "cabin", "vacation"], category: "home" },
	{ name: "villa", tags: ["house", "mansion", "luxury"], category: "home" },
	{ name: "bed", tags: ["sleep", "bedroom", "rest"], category: "home" },
	{ name: "chair", tags: ["seat", "furniture", "sit"], category: "home" },
	{ name: "table_restaurant", tags: ["dining", "furniture", "eat"], category: "home" },
	{ name: "living", tags: ["room", "sofa", "furniture"], category: "home" },
	{ name: "kitchen", tags: ["cook", "food", "room"], category: "home" },
	{ name: "bathroom", tags: ["toilet", "shower", "room"], category: "home" },
	{ name: "garage", tags: ["car", "parking", "storage"], category: "home" },
	{ name: "yard", tags: ["garden", "outdoor", "grass"], category: "home" },
	{ name: "deck", tags: ["patio", "outdoor", "wood"], category: "home" },
	{ name: "pool", tags: ["swimming", "water", "summer"], category: "home" },
	{ name: "hot_tub", tags: ["spa", "jacuzzi", "relax"], category: "home" },
	{ name: "door_front", tags: ["entrance", "exit", "entry"], category: "home" },
	{ name: "window", tags: ["glass", "view", "opening"], category: "home" },
	{ name: "curtains", tags: ["window", "drapes", "blinds"], category: "home" },
	{ name: "light", tags: ["lamp", "bulb", "illuminate"], category: "home" },
	{ name: "lightbulb", tags: ["lamp", "idea", "light"], category: "home" },
	{ name: "ceiling_fan", tags: ["fan", "cool", "air"], category: "home" },
	{ name: "hvac", tags: ["heating", "cooling", "climate"], category: "home" },
	{ name: "thermostat", tags: ["temperature", "climate", "control"], category: "home" },
	{ name: "lock", tags: ["security", "door", "key"], category: "home" },
	{ name: "key", tags: ["lock", "security", "access"], category: "home" },
	{ name: "doorbell", tags: ["ring", "entrance", "visitor"], category: "home" },
	{ name: "security", tags: ["shield", "protection", "safe"], category: "home" },
	{ name: "videocam", tags: ["camera", "surveillance", "monitor"], category: "home" },
	{ name: "sensor_door", tags: ["security", "smart home", "detect"], category: "home" },
	{ name: "sensor_window", tags: ["security", "smart home", "detect"], category: "home" },
	{ name: "cleaning_services", tags: ["clean", "broom", "maid"], category: "home" },
	{ name: "soap", tags: ["clean", "wash", "hygiene"], category: "home" },
	{ name: "local_laundry_service", tags: ["wash", "clothes", "clean"], category: "home" },
	{ name: "iron", tags: ["clothes", "press", "wrinkle"], category: "home" },
	{ name: "microwave", tags: ["kitchen", "heat", "cook"], category: "home" },
	{ name: "blender", tags: ["kitchen", "mix", "smoothie"], category: "home" },
	{ name: "coffee_maker", tags: ["kitchen", "coffee", "brew"], category: "home" },
	
	// Image icons
	{ name: "image", tags: ["photo", "picture", "gallery"], category: "image" },
	{ name: "photo", tags: ["image", "picture", "gallery"], category: "image" },
	{ name: "photo_library", tags: ["gallery", "collection", "album"], category: "image" },
	{ name: "collections", tags: ["gallery", "photos", "album"], category: "image" },
	{ name: "camera", tags: ["photo", "picture", "lens"], category: "image" },
	{ name: "camera_alt", tags: ["photo", "picture", "snapshot"], category: "image" },
	{ name: "add_a_photo", tags: ["camera", "new", "capture"], category: "image" },
	{ name: "add_photo_alternate", tags: ["image", "new", "upload"], category: "image" },
	{ name: "broken_image", tags: ["error", "missing", "corrupt"], category: "image" },
	{ name: "hide_image", tags: ["invisible", "hidden", "private"], category: "image" },
	{ name: "filter", tags: ["effect", "edit", "adjust"], category: "image" },
	{ name: "filter_vintage", tags: ["flower", "effect", "retro"], category: "image" },
	{ name: "auto_fix_high", tags: ["magic", "enhance", "auto"], category: "image" },
	{ name: "tune", tags: ["adjust", "settings", "edit"], category: "image" },
	{ name: "brightness_6", tags: ["light", "adjust", "contrast"], category: "image" },
	{ name: "contrast", tags: ["adjust", "edit", "light"], category: "image" },
	{ name: "color_lens", tags: ["palette", "hue", "edit"], category: "image" },
	{ name: "palette", tags: ["colors", "art", "paint"], category: "image" },
	{ name: "colorize", tags: ["eyedropper", "pick", "sample"], category: "image" },
	{ name: "gradient", tags: ["blend", "transition", "color"], category: "image" },
	{ name: "blur_on", tags: ["soft", "effect", "focus"], category: "image" },
	{ name: "blur_off", tags: ["sharp", "clear", "focus"], category: "image" },
	{ name: "crop", tags: ["trim", "cut", "resize"], category: "image" },
	{ name: "crop_free", tags: ["trim", "select", "area"], category: "image" },
	{ name: "crop_square", tags: ["trim", "1:1", "instagram"], category: "image" },
	{ name: "rotate_left", tags: ["turn", "counter clockwise", "ccw"], category: "image" },
	{ name: "rotate_right", tags: ["turn", "clockwise", "cw"], category: "image" },
	{ name: "flip", tags: ["mirror", "reflect", "horizontal"], category: "image" },
	{ name: "flip_camera_android", tags: ["switch", "front", "back"], category: "image" },
	{ name: "straighten", tags: ["level", "horizon", "align"], category: "image" },
	{ name: "transform", tags: ["edit", "modify", "change"], category: "image" },
	{ name: "aspect_ratio", tags: ["size", "proportion", "resize"], category: "image" },
	{ name: "photo_size_select_large", tags: ["resize", "scale", "big"], category: "image" },
	{ name: "photo_size_select_small", tags: ["resize", "scale", "small"], category: "image" },
	{ name: "texture", tags: ["pattern", "surface", "material"], category: "image" },
	{ name: "style", tags: ["design", "look", "appearance"], category: "image" },
	{ name: "panorama", tags: ["wide", "landscape", "photo"], category: "image" },
	{ name: "panorama_horizontal", tags: ["wide", "landscape", "scroll"], category: "image" },
	{ name: "portrait", tags: ["person", "photo", "vertical"], category: "image" },
	{ name: "landscape", tags: ["nature", "photo", "horizontal"], category: "image" },
	{ name: "hdr_on", tags: ["photo", "range", "quality"], category: "image" },
	{ name: "flash_on", tags: ["light", "camera", "strobe"], category: "image" },
	{ name: "flash_off", tags: ["light", "camera", "no flash"], category: "image" },
	{ name: "flash_auto", tags: ["light", "camera", "automatic"], category: "image" },
	{ name: "timer", tags: ["countdown", "delay", "self timer"], category: "image" },
	{ name: "timelapse", tags: ["video", "speed", "fast"], category: "image" },
	{ name: "gif", tags: ["animation", "image", "meme"], category: "image" },
	{ name: "gif_box", tags: ["animation", "meme", "reaction"], category: "image" },
	{ name: "animation", tags: ["motion", "video", "move"], category: "image" },
	{ name: "draw", tags: ["pencil", "sketch", "art"], category: "image" },
	{ name: "brush", tags: ["paint", "art", "draw"], category: "image" },
	{ name: "edit", tags: ["pencil", "modify", "change"], category: "image" },
	{ name: "healing", tags: ["fix", "repair", "retouch"], category: "image" },
	{ name: "auto_awesome", tags: ["magic", "sparkle", "enhance"], category: "image" },
	{ name: "auto_awesome_mosaic", tags: ["collage", "grid", "photos"], category: "image" },
	{ name: "wallpaper", tags: ["background", "desktop", "image"], category: "image" },
	{ name: "screenshot", tags: ["capture", "screen", "snap"], category: "image" },
	{ name: "raw_on", tags: ["photo", "format", "uncompressed"], category: "image" },
	{ name: "lens", tags: ["circle", "camera", "focus"], category: "image" },
	{ name: "camera_roll", tags: ["film", "gallery", "photos"], category: "image" },
	{ name: "movie_creation", tags: ["video", "film", "edit"], category: "image" },
	{ name: "movie_filter", tags: ["video", "effect", "edit"], category: "image" },
	{ name: "slideshow", tags: ["presentation", "photos", "gallery"], category: "image" },
	
	// Maps icons
	{ name: "map", tags: ["location", "navigation", "directions"], category: "maps" },
	{ name: "place", tags: ["location", "pin", "marker"], category: "maps" },
	{ name: "pin_drop", tags: ["location", "marker", "map"], category: "maps" },
	{ name: "location_on", tags: ["pin", "marker", "gps"], category: "maps" },
	{ name: "my_location", tags: ["gps", "current", "here"], category: "maps" },
	{ name: "near_me", tags: ["nearby", "location", "close"], category: "maps" },
	{ name: "explore", tags: ["compass", "navigate", "discover"], category: "maps" },
	{ name: "navigation", tags: ["arrow", "direction", "compass"], category: "maps" },
	{ name: "directions", tags: ["route", "way", "path"], category: "maps" },
	{ name: "directions_car", tags: ["drive", "vehicle", "auto"], category: "maps" },
	{ name: "directions_bus", tags: ["transit", "public", "transport"], category: "maps" },
	{ name: "directions_subway", tags: ["metro", "train", "underground"], category: "maps" },
	{ name: "directions_railway", tags: ["train", "rail", "transit"], category: "maps" },
	{ name: "directions_bike", tags: ["bicycle", "cycling", "ride"], category: "maps" },
	{ name: "directions_walk", tags: ["pedestrian", "walking", "foot"], category: "maps" },
	{ name: "directions_run", tags: ["running", "jogging", "sprint"], category: "maps" },
	{ name: "flight", tags: ["airplane", "plane", "travel"], category: "maps" },
	{ name: "local_airport", tags: ["airplane", "plane", "travel"], category: "maps" },
	{ name: "train", tags: ["rail", "transit", "subway"], category: "maps" },
	{ name: "tram", tags: ["rail", "transit", "streetcar"], category: "maps" },
	{ name: "subway", tags: ["metro", "underground", "train"], category: "maps" },
	{ name: "local_taxi", tags: ["cab", "ride", "uber"], category: "maps" },
	{ name: "local_shipping", tags: ["truck", "delivery", "package"], category: "maps" },
	{ name: "sailing", tags: ["boat", "ship", "water"], category: "maps" },
	{ name: "two_wheeler", tags: ["motorcycle", "scooter", "bike"], category: "maps" },
	{ name: "pedal_bike", tags: ["bicycle", "cycling", "ride"], category: "maps" },
	{ name: "electric_scooter", tags: ["e-scooter", "ride", "transport"], category: "maps" },
	{ name: "electric_car", tags: ["ev", "vehicle", "green"], category: "maps" },
	{ name: "local_gas_station", tags: ["fuel", "petrol", "gas"], category: "maps" },
	{ name: "ev_station", tags: ["charge", "electric", "power"], category: "maps" },
	{ name: "local_parking", tags: ["park", "car", "lot"], category: "maps" },
	{ name: "traffic", tags: ["lights", "signal", "road"], category: "maps" },
	{ name: "route", tags: ["path", "directions", "way"], category: "maps" },
	{ name: "alt_route", tags: ["alternative", "path", "detour"], category: "maps" },
	{ name: "wrong_location", tags: ["error", "incorrect", "pin"], category: "maps" },
	{ name: "local_restaurant", tags: ["food", "dining", "eat"], category: "maps" },
	{ name: "local_cafe", tags: ["coffee", "drink", "shop"], category: "maps" },
	{ name: "local_bar", tags: ["drink", "pub", "alcohol"], category: "maps" },
	{ name: "local_pizza", tags: ["food", "restaurant", "delivery"], category: "maps" },
	{ name: "fastfood", tags: ["burger", "food", "restaurant"], category: "maps" },
	{ name: "local_grocery_store", tags: ["food", "shopping", "market"], category: "maps" },
	{ name: "local_mall", tags: ["shopping", "store", "retail"], category: "maps" },
	{ name: "store", tags: ["shop", "retail", "business"], category: "maps" },
	{ name: "storefront", tags: ["shop", "business", "retail"], category: "maps" },
	{ name: "local_hospital", tags: ["medical", "health", "emergency"], category: "maps" },
	{ name: "local_pharmacy", tags: ["medicine", "drug", "health"], category: "maps" },
	{ name: "local_atm", tags: ["money", "cash", "bank"], category: "maps" },
	{ name: "local_library", tags: ["books", "reading", "study"], category: "maps" },
	{ name: "school", tags: ["education", "learn", "study"], category: "maps" },
	{ name: "museum", tags: ["art", "culture", "history"], category: "maps" },
	{ name: "church", tags: ["religion", "worship", "faith"], category: "maps" },
	{ name: "mosque", tags: ["religion", "worship", "islam"], category: "maps" },
	{ name: "synagogue", tags: ["religion", "worship", "jewish"], category: "maps" },
	{ name: "temple_hindu", tags: ["religion", "worship", "hindu"], category: "maps" },
	{ name: "temple_buddhist", tags: ["religion", "worship", "buddhist"], category: "maps" },
	{ name: "stadium", tags: ["sports", "arena", "event"], category: "maps" },
	{ name: "park", tags: ["nature", "outdoor", "green"], category: "maps" },
	{ name: "forest", tags: ["trees", "nature", "woods"], category: "maps" },
	{ name: "beach_access", tags: ["ocean", "sea", "sand"], category: "maps" },
	{ name: "terrain", tags: ["landscape", "mountain", "nature"], category: "maps" },
	{ name: "landscape", tags: ["nature", "scenery", "view"], category: "maps" },
	{ name: "public", tags: ["globe", "world", "earth"], category: "maps" },
	{ name: "south_america", tags: ["continent", "map", "region"], category: "maps" },
	{ name: "travel_explore", tags: ["world", "globe", "discover"], category: "maps" },
	{ name: "hotel", tags: ["lodging", "stay", "accommodation"], category: "maps" },
	{ name: "local_hotel", tags: ["lodging", "bed", "stay"], category: "maps" },
	{ name: "apartment", tags: ["building", "housing", "residence"], category: "maps" },
	{ name: "business", tags: ["building", "office", "work"], category: "maps" },
	{ name: "factory", tags: ["industry", "manufacturing", "work"], category: "maps" },
	{ name: "warehouse", tags: ["storage", "industrial", "building"], category: "maps" },
	{ name: "local_fire_department", tags: ["emergency", "fire", "rescue"], category: "maps" },
	{ name: "local_police", tags: ["law", "security", "emergency"], category: "maps" },
	
	// Navigation icons
	{ name: "arrow_back", tags: ["left", "previous", "return"], category: "navigation" },
	{ name: "arrow_forward", tags: ["right", "next", "continue"], category: "navigation" },
	{ name: "arrow_upward", tags: ["up", "top", "above"], category: "navigation" },
	{ name: "arrow_downward", tags: ["down", "bottom", "below"], category: "navigation" },
	{ name: "arrow_back_ios", tags: ["left", "previous", "chevron"], category: "navigation" },
	{ name: "arrow_forward_ios", tags: ["right", "next", "chevron"], category: "navigation" },
	{ name: "chevron_left", tags: ["left", "previous", "arrow"], category: "navigation" },
	{ name: "chevron_right", tags: ["right", "next", "arrow"], category: "navigation" },
	{ name: "expand_less", tags: ["up", "collapse", "chevron"], category: "navigation" },
	{ name: "expand_more", tags: ["down", "expand", "chevron"], category: "navigation" },
	{ name: "unfold_more", tags: ["expand", "show", "arrows"], category: "navigation" },
	{ name: "unfold_less", tags: ["collapse", "hide", "arrows"], category: "navigation" },
	{ name: "first_page", tags: ["start", "beginning", "arrow"], category: "navigation" },
	{ name: "last_page", tags: ["end", "final", "arrow"], category: "navigation" },
	{ name: "menu", tags: ["hamburger", "list", "navigation"], category: "navigation" },
	{ name: "menu_open", tags: ["hamburger", "arrow", "navigation"], category: "navigation" },
	{ name: "more_horiz", tags: ["dots", "options", "overflow"], category: "navigation" },
	{ name: "more_vert", tags: ["dots", "options", "overflow"], category: "navigation" },
	{ name: "apps", tags: ["grid", "menu", "all"], category: "navigation" },
	{ name: "home", tags: ["house", "main", "start"], category: "navigation" },
	{ name: "close", tags: ["x", "cancel", "dismiss"], category: "navigation" },
	{ name: "cancel", tags: ["x", "close", "remove"], category: "navigation" },
	{ name: "refresh", tags: ["reload", "sync", "update"], category: "navigation" },
	{ name: "double_arrow", tags: ["fast", "skip", "forward"], category: "navigation" },
	{ name: "subdirectory_arrow_left", tags: ["corner", "turn", "branch"], category: "navigation" },
	{ name: "subdirectory_arrow_right", tags: ["corner", "turn", "branch"], category: "navigation" },
	{ name: "switch_left", tags: ["swap", "change", "arrow"], category: "navigation" },
	{ name: "switch_right", tags: ["swap", "change", "arrow"], category: "navigation" },
	{ name: "north", tags: ["up", "direction", "compass"], category: "navigation" },
	{ name: "south", tags: ["down", "direction", "compass"], category: "navigation" },
	{ name: "east", tags: ["right", "direction", "compass"], category: "navigation" },
	{ name: "west", tags: ["left", "direction", "compass"], category: "navigation" },
	{ name: "north_east", tags: ["diagonal", "direction", "compass"], category: "navigation" },
	{ name: "north_west", tags: ["diagonal", "direction", "compass"], category: "navigation" },
	{ name: "south_east", tags: ["diagonal", "direction", "compass"], category: "navigation" },
	{ name: "south_west", tags: ["diagonal", "direction", "compass"], category: "navigation" },
	
	// Notification icons
	{ name: "notifications", tags: ["bell", "alert", "reminder"], category: "notification" },
	{ name: "notifications_active", tags: ["bell", "ringing", "alert"], category: "notification" },
	{ name: "notifications_none", tags: ["bell", "empty", "no alerts"], category: "notification" },
	{ name: "notifications_off", tags: ["bell", "mute", "silent"], category: "notification" },
	{ name: "notifications_paused", tags: ["bell", "snoozed", "waiting"], category: "notification" },
	{ name: "notification_important", tags: ["bell", "urgent", "alert"], category: "notification" },
	{ name: "notification_add", tags: ["bell", "new", "create"], category: "notification" },
	{ name: "circle_notifications", tags: ["bell", "badge", "round"], category: "notification" },
	{ name: "do_not_disturb", tags: ["silent", "mute", "dnd"], category: "notification" },
	{ name: "do_not_disturb_on", tags: ["silent", "active", "dnd"], category: "notification" },
	{ name: "do_not_disturb_off", tags: ["sound", "unmute", "enable"], category: "notification" },
	{ name: "priority_high", tags: ["urgent", "important", "exclamation"], category: "notification" },
	{ name: "event", tags: ["calendar", "date", "schedule"], category: "notification" },
	{ name: "event_available", tags: ["calendar", "free", "open"], category: "notification" },
	{ name: "event_busy", tags: ["calendar", "occupied", "full"], category: "notification" },
	{ name: "event_note", tags: ["calendar", "memo", "schedule"], category: "notification" },
	{ name: "alarm", tags: ["clock", "time", "reminder"], category: "notification" },
	{ name: "alarm_add", tags: ["clock", "new", "create"], category: "notification" },
	{ name: "alarm_on", tags: ["clock", "active", "set"], category: "notification" },
	{ name: "alarm_off", tags: ["clock", "disabled", "silent"], category: "notification" },
	{ name: "timer", tags: ["clock", "countdown", "stopwatch"], category: "notification" },
	{ name: "timer_off", tags: ["clock", "disabled", "stop"], category: "notification" },
	{ name: "schedule", tags: ["clock", "time", "calendar"], category: "notification" },
	{ name: "access_time", tags: ["clock", "time", "schedule"], category: "notification" },
	{ name: "snooze", tags: ["alarm", "delay", "later"], category: "notification" },
	{ name: "more_time", tags: ["clock", "add", "extend"], category: "notification" },
	{ name: "pending", tags: ["waiting", "loading", "process"], category: "notification" },
	{ name: "pending_actions", tags: ["waiting", "todo", "tasks"], category: "notification" },
	{ name: "update", tags: ["refresh", "sync", "new"], category: "notification" },
	{ name: "sync", tags: ["refresh", "update", "rotate"], category: "notification" },
	{ name: "sync_disabled", tags: ["refresh", "off", "stop"], category: "notification" },
	{ name: "sync_problem", tags: ["refresh", "error", "issue"], category: "notification" },
	{ name: "published_with_changes", tags: ["update", "modified", "edited"], category: "notification" },
	{ name: "mark_chat_unread", tags: ["message", "new", "notification"], category: "notification" },
	{ name: "mark_chat_read", tags: ["message", "seen", "read"], category: "notification" },
	{ name: "mark_email_unread", tags: ["mail", "new", "notification"], category: "notification" },
	{ name: "mark_email_read", tags: ["mail", "seen", "read"], category: "notification" },
	
	// Social icons
	{ name: "person", tags: ["user", "account", "profile", "avatar"], category: "social" },
	{ name: "person_outline", tags: ["user", "account", "profile"], category: "social" },
	{ name: "people", tags: ["users", "group", "team"], category: "social" },
	{ name: "people_outline", tags: ["users", "group", "team"], category: "social" },
	{ name: "group", tags: ["people", "team", "users"], category: "social" },
	{ name: "groups", tags: ["people", "team", "community"], category: "social" },
	{ name: "person_add", tags: ["user", "new", "invite", "follow"], category: "social" },
	{ name: "person_remove", tags: ["user", "delete", "unfollow"], category: "social" },
	{ name: "group_add", tags: ["people", "invite", "team"], category: "social" },
	{ name: "group_remove", tags: ["people", "delete", "leave"], category: "social" },
	{ name: "face", tags: ["emoji", "person", "avatar"], category: "social" },
	{ name: "sentiment_satisfied", tags: ["happy", "emoji", "smile"], category: "social" },
	{ name: "sentiment_dissatisfied", tags: ["sad", "emoji", "frown"], category: "social" },
	{ name: "sentiment_neutral", tags: ["meh", "emoji", "neutral"], category: "social" },
	{ name: "sentiment_very_satisfied", tags: ["very happy", "emoji", "grin"], category: "social" },
	{ name: "sentiment_very_dissatisfied", tags: ["very sad", "emoji", "angry"], category: "social" },
	{ name: "mood", tags: ["happy", "face", "emoji"], category: "social" },
	{ name: "mood_bad", tags: ["sad", "face", "emoji"], category: "social" },
	{ name: "emoji_emotions", tags: ["face", "happy", "smile"], category: "social" },
	{ name: "emoji_people", tags: ["person", "wave", "human"], category: "social" },
	{ name: "emoji_nature", tags: ["flower", "plant", "animal"], category: "social" },
	{ name: "emoji_food_beverage", tags: ["drink", "eat", "food"], category: "social" },
	{ name: "emoji_transportation", tags: ["car", "vehicle", "travel"], category: "social" },
	{ name: "emoji_objects", tags: ["things", "items", "objects"], category: "social" },
	{ name: "emoji_symbols", tags: ["signs", "characters", "special"], category: "social" },
	{ name: "emoji_events", tags: ["celebration", "party", "balloon"], category: "social" },
	{ name: "share", tags: ["social", "send", "forward"], category: "social" },
	{ name: "thumb_up", tags: ["like", "approve", "good"], category: "social" },
	{ name: "thumb_down", tags: ["dislike", "disapprove", "bad"], category: "social" },
	{ name: "thumbs_up_down", tags: ["rating", "vote", "opinion"], category: "social" },
	{ name: "recommend", tags: ["like", "suggest", "approve"], category: "social" },
	{ name: "public", tags: ["globe", "world", "everyone"], category: "social" },
	{ name: "language", tags: ["globe", "world", "translate"], category: "social" },
	{ name: "cake", tags: ["birthday", "celebration", "party"], category: "social" },
	{ name: "celebration", tags: ["party", "confetti", "event"], category: "social" },
	{ name: "verified", tags: ["check", "authentic", "badge"], category: "social" },
	{ name: "verified_user", tags: ["shield", "check", "secure"], category: "social" },
	{ name: "workspace_premium", tags: ["badge", "award", "premium"], category: "social" },
	{ name: "military_tech", tags: ["medal", "award", "badge"], category: "social" },
	{ name: "stars", tags: ["award", "favorite", "prize"], category: "social" },
	{ name: "whatshot", tags: ["trending", "fire", "popular"], category: "social" },
	{ name: "record_voice_over", tags: ["speak", "person", "audio"], category: "social" },
	{ name: "voice_over_off", tags: ["mute", "person", "silent"], category: "social" },
	{ name: "connect_without_contact", tags: ["social distance", "remote", "wireless"], category: "social" },
	{ name: "handshake", tags: ["deal", "agreement", "partnership"], category: "social" },
	{ name: "diversity_1", tags: ["people", "inclusion", "team"], category: "social" },
	{ name: "diversity_2", tags: ["people", "inclusion", "team"], category: "social" },
	{ name: "diversity_3", tags: ["people", "inclusion", "team"], category: "social" },
	{ name: "psychology", tags: ["mind", "brain", "mental"], category: "social" },
	{ name: "elderly", tags: ["old", "senior", "person"], category: "social" },
	{ name: "pregnant_woman", tags: ["mother", "baby", "maternity"], category: "social" },
	{ name: "family_restroom", tags: ["parents", "children", "bathroom"], category: "social" },
	{ name: "man", tags: ["male", "person", "human"], category: "social" },
	{ name: "woman", tags: ["female", "person", "human"], category: "social" },
	{ name: "boy", tags: ["child", "kid", "male"], category: "social" },
	{ name: "girl", tags: ["child", "kid", "female"], category: "social" },
	
	// Toggle icons
	{ name: "toggle_on", tags: ["switch", "enable", "active"], category: "toggle" },
	{ name: "toggle_off", tags: ["switch", "disable", "inactive"], category: "toggle" },
	{ name: "check_box", tags: ["checkbox", "selected", "checked"], category: "toggle" },
	{ name: "check_box_outline_blank", tags: ["checkbox", "empty", "unchecked"], category: "toggle" },
	{ name: "indeterminate_check_box", tags: ["checkbox", "partial", "minus"], category: "toggle" },
	{ name: "radio_button_checked", tags: ["radio", "selected", "option"], category: "toggle" },
	{ name: "radio_button_unchecked", tags: ["radio", "empty", "option"], category: "toggle" },
	{ name: "star", tags: ["favorite", "rate", "bookmark"], category: "toggle" },
	{ name: "star_border", tags: ["favorite", "rate", "outline"], category: "toggle" },
	{ name: "star_half", tags: ["favorite", "rate", "partial"], category: "toggle" },
	{ name: "favorite", tags: ["heart", "like", "love"], category: "toggle" },
	{ name: "favorite_border", tags: ["heart", "like", "outline"], category: "toggle" },
	{ name: "bookmark", tags: ["save", "flag", "mark"], category: "toggle" },
	{ name: "bookmark_border", tags: ["save", "flag", "outline"], category: "toggle" },
	{ name: "bookmark_add", tags: ["save", "new", "create"], category: "toggle" },
	{ name: "bookmark_added", tags: ["save", "done", "check"], category: "toggle" },
	{ name: "bookmark_remove", tags: ["save", "delete", "remove"], category: "toggle" },
	{ name: "visibility", tags: ["eye", "show", "view"], category: "toggle" },
	{ name: "visibility_off", tags: ["eye", "hide", "hidden"], category: "toggle" },
	{ name: "lightbulb", tags: ["idea", "light", "on"], category: "toggle" },
	{ name: "lightbulb_outline", tags: ["idea", "light", "off"], category: "toggle" },
	{ name: "dark_mode", tags: ["night", "theme", "moon"], category: "toggle" },
	{ name: "light_mode", tags: ["day", "theme", "sun"], category: "toggle" },
	{ name: "brightness_4", tags: ["dark", "light", "contrast"], category: "toggle" },
	{ name: "wifi", tags: ["internet", "network", "on"], category: "toggle" },
	{ name: "wifi_off", tags: ["internet", "network", "off"], category: "toggle" },
	{ name: "bluetooth", tags: ["wireless", "connect", "on"], category: "toggle" },
	{ name: "bluetooth_disabled", tags: ["wireless", "connect", "off"], category: "toggle" },
	{ name: "signal_wifi_4_bar", tags: ["internet", "strong", "full"], category: "toggle" },
	{ name: "signal_wifi_off", tags: ["internet", "disconnected", "none"], category: "toggle" },
	{ name: "signal_cellular_4_bar", tags: ["mobile", "strong", "full"], category: "toggle" },
	{ name: "signal_cellular_off", tags: ["mobile", "disconnected", "none"], category: "toggle" },
	{ name: "airplanemode_active", tags: ["flight", "offline", "on"], category: "toggle" },
	{ name: "airplanemode_inactive", tags: ["flight", "offline", "off"], category: "toggle" },
	{ name: "location_on", tags: ["gps", "pin", "enabled"], category: "toggle" },
	{ name: "location_off", tags: ["gps", "pin", "disabled"], category: "toggle" },
	{ name: "gps_fixed", tags: ["location", "satellite", "locked"], category: "toggle" },
	{ name: "gps_off", tags: ["location", "satellite", "disabled"], category: "toggle" },
	{ name: "flashlight_on", tags: ["light", "torch", "enabled"], category: "toggle" },
	{ name: "flashlight_off", tags: ["light", "torch", "disabled"], category: "toggle" },
	{ name: "mic", tags: ["microphone", "audio", "on"], category: "toggle" },
	{ name: "mic_off", tags: ["microphone", "audio", "muted"], category: "toggle" },
	{ name: "videocam", tags: ["camera", "video", "on"], category: "toggle" },
	{ name: "videocam_off", tags: ["camera", "video", "off"], category: "toggle" },
	{ name: "volume_up", tags: ["sound", "audio", "loud"], category: "toggle" },
	{ name: "volume_off", tags: ["sound", "audio", "muted"], category: "toggle" },
	{ name: "notifications", tags: ["bell", "alert", "on"], category: "toggle" },
	{ name: "notifications_off", tags: ["bell", "alert", "muted"], category: "toggle" },
	{ name: "sync", tags: ["refresh", "rotate", "on"], category: "toggle" },
	{ name: "sync_disabled", tags: ["refresh", "rotate", "off"], category: "toggle" },
	{ name: "screen_rotation", tags: ["rotate", "orientation", "enabled"], category: "toggle" },
	{ name: "screen_lock_rotation", tags: ["rotate", "orientation", "locked"], category: "toggle" },
	{ name: "lock", tags: ["security", "closed", "secure"], category: "toggle" },
	{ name: "lock_open", tags: ["security", "open", "unlocked"], category: "toggle" },
];

// Track animated GIFs separately for background and icon
let backgroundGif = { hasAnimated: false, data: null, file: null };
let iconGif = { hasAnimated: false, data: null, file: null };

// Matomo event tracking helper
let isInitializing = true; // Flag to prevent tracking during page load

function trackEvent(category, action, name = null, value = null) {
	if (isInitializing) return; // Don't track during initialization
	if (typeof _paq !== 'undefined') {
		// Use trackEvent with a callback to ensure it's queued
		if (name && value) {
			_paq.push(['trackEvent', category, action, name, value]);
		} else if (name) {
			_paq.push(['trackEvent', category, action, name]);
		} else {
			_paq.push(['trackEvent', category, action]);
		}
		// Force send immediately for reliability on mobile
		_paq.push(['enableLinkTracking']);
	}
}

// Banner dismiss function
function dismissBanner() {
	const banner = document.getElementById('announcementBanner');
	if (banner) {
		banner.classList.add('hidden');
		localStorage.setItem('bannerDismissed', 'true');
		trackEvent('UI', 'Dismiss Banner');
	}
}

// Check banner state on load
function checkBannerState() {
	const banner = document.getElementById('announcementBanner');
	if (banner && localStorage.getItem('bannerDismissed') === 'true') {
		banner.classList.add('hidden');
	}
}

// Text control functions
function controlTextText() {
	const textText = document.getElementById('textTextControl');
	const textPreview = document.getElementById('textPreview');
	textPreview.innerHTML = textText.value;
	localStorage.setItem('textText', textText.value);
}

function controlTextSize() {
	const textSize = document.getElementById('textSizeControl');
	const textPreview = document.getElementById('textPreview');
	textPreview.style.fontSize = textSize.value;
	localStorage.setItem('textSize', textSize.value);
}

function controlTextColour() {
	const textColour = document.getElementById('textColourControl');
	const textPreview = document.getElementById('textPreview');
	textPreview.style.color = textColour.value;
	localStorage.setItem('textColour', textColour.value);
}

function controlTextFont() {
	const textFont = document.getElementById('textFontControl');
	const textPreview = document.getElementById('textPreview');
	textPreview.style.fontFamily = '"' + textFont.value + '"';
	localStorage.setItem('textFont', textFont.value);
	trackEvent('Design', 'Change Font', textFont.value);
}

// Advanced text options
function controlTextTracking() {
	const tracking = document.getElementById('textTrackingControl');
	const textPreview = document.getElementById('textPreview');
	textPreview.style.letterSpacing = tracking.value + 'px';
	document.getElementById('trackingValue').textContent = tracking.value + 'px';
	localStorage.setItem('textTracking', tracking.value);
}

function controlTextLineHeight() {
	const lineHeight = document.getElementById('textLineHeightControl');
	const textPreview = document.getElementById('textPreview');
	textPreview.style.lineHeight = lineHeight.value;
	document.getElementById('lineHeightValue').textContent = lineHeight.value;
	localStorage.setItem('textLineHeight', lineHeight.value);
}

function controlTextWeight() {
	const weight = document.getElementById('textWeightControl');
	const textPreview = document.getElementById('textPreview');
	textPreview.style.fontWeight = weight.value;
	localStorage.setItem('textWeight', weight.value);
}

function controlTextTransform() {
	const transform = document.getElementById('textTransformControl');
	const textPreview = document.getElementById('textPreview');
	textPreview.style.textTransform = transform.value;
	localStorage.setItem('textTransform', transform.value);
}

function controlTextShadow() {
	const textShadow = document.getElementById('textShadowControl').value;
	const buttonText = document.getElementById('textPreview');

	switch(textShadow) {
		case 'none':
			buttonText.style.textShadow = 'none';
			break;
		case 'shadow':
			buttonText.style.textShadow = '.025em .025em .05em rgba(0,0,0,0.35)';
			break;
		case 'glow':
			buttonText.style.textShadow = '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)';
			break;
		case 'outline':
			buttonText.style.textShadow = '-1px -1px 0 rgba(0,0,0,0.5), 1px -1px 0 rgba(0,0,0,0.5), -1px 1px 0 rgba(0,0,0,0.5), 1px 1px 0 rgba(0,0,0,0.5)';
			break;
	}
	localStorage.setItem('textShadow', textShadow);
	if(textShadow !== 'none') {
		trackEvent('Design', 'Text Shadow', textShadow);
	}
}

// Border controls
function controlBorderWidth() {
	const borderWidth = document.getElementById('borderWidthControl');
	const buttonBackground = document.getElementById('buttonBackground');
	buttonBackground.style.borderWidth = borderWidth.value;
	localStorage.setItem('borderWidth', borderWidth.value);
}

function controlBorderColour() {
	const borderColour = document.getElementById('borderColourControl');
	const buttonBackground = document.getElementById('buttonBackground');
	buttonBackground.style.borderColor = borderColour.value;
	localStorage.setItem('borderColour', borderColour.value);
}

function controlBorderRadius() {
	const radius = document.getElementById('borderRadiusControl').value;
	const previewButtonContainer = document.getElementById('preview-button-container');
	const previewButton = document.getElementById('preview-button');
	const buttonBackground = document.getElementById('buttonBackground');
	const buttonOverlay = document.getElementById('buttonOverlay');
	
	// Apply radius value (handle percentage or pixel values)
	const radiusValue = radius.includes('%') ? radius : radius + 'px';
	previewButtonContainer.style.borderRadius = radiusValue;
	previewButton.style.borderRadius = radiusValue;
	buttonBackground.style.borderRadius = radiusValue;
	buttonOverlay.style.borderRadius = radiusValue;
	
	localStorage.setItem('borderRadius', radius);
}

// Icon effects control
function controlIconEffects() {
	const opacity = document.getElementById('iconOpacityControl').value;
	const rotation = document.getElementById('iconRotationControl').value;
	const flip = document.getElementById('iconFlipControl').value;
	const buttonIconInner = document.getElementById('buttonIconInner');
	
	// Update opacity display
	document.getElementById('iconOpacityValue').textContent = Math.round(opacity * 100) + '%';
	
	// Apply opacity
	buttonIconInner.style.opacity = opacity;
	
	// Build transform string
	let transforms = [];
	
	if(rotation !== '0') {
		transforms.push(`rotate(${rotation}deg)`);
	}
	
	switch(flip) {
		case 'horizontal':
			transforms.push('scaleX(-1)');
			break;
		case 'vertical':
			transforms.push('scaleY(-1)');
			break;
		case 'both':
			transforms.push('scale(-1, -1)');
			break;
	}
	
	buttonIconInner.style.transform = transforms.length > 0 ? transforms.join(' ') : 'none';
	
	localStorage.setItem('iconOpacity', opacity);
	localStorage.setItem('iconRotation', rotation);
	localStorage.setItem('iconFlip', flip);
	
	// Track non-default effects
	if(rotation !== '0') {
		trackEvent('Design', 'Icon Rotation', rotation);
	}
	if(flip !== 'none') {
		trackEvent('Design', 'Icon Flip', flip);
	}
}

// Status badge control
function controlBadge() {
	const badge = document.getElementById('badgeControl').value;
	const position = document.getElementById('badgePositionControl').value;
	const badgeElement = document.getElementById('buttonBadge');
	const positionRow = document.getElementById('badgePositionRow');
	
	if(badge === 'none') {
		badgeElement.style.display = 'none';
		positionRow.style.display = 'none';
	} else {
		badgeElement.style.display = 'block';
		positionRow.style.display = 'block';
		
		// Set badge color
		const colors = {
			'red': '#ef4444',
			'green': '#22c55e',
			'orange': '#f97316',
			'blue': '#3b82f6',
			'purple': '#a855f7',
			'white': '#ffffff'
		};
		badgeElement.style.backgroundColor = colors[badge] || '#ef4444';
		
		// Add glow effect for visibility
		badgeElement.style.boxShadow = `0 0 8px ${colors[badge] || '#ef4444'}`;
		
		// Set position - more inset to avoid border radius clipping
		badgeElement.style.top = position.includes('top') ? '14px' : 'auto';
		badgeElement.style.bottom = position.includes('bottom') ? '14px' : 'auto';
		badgeElement.style.left = position.includes('left') ? '14px' : 'auto';
		badgeElement.style.right = position.includes('right') ? '14px' : 'auto';
	}
	
	localStorage.setItem('badge', badge);
	localStorage.setItem('badgePosition', position);
	
	if(badge !== 'none') {
		trackEvent('Design', 'Badge', badge);
	}
}

// Background controls
function controlBackgroundStyle() {
	const backgroundStyle = document.getElementById('backgroundStyleControl');
	const buttonBackground = document.getElementById('buttonBackground');
	localStorage.setItem('backgroundStyle', backgroundStyle.value);
	
	trackEvent('Design', 'Background Style', backgroundStyle.value);
	
	// Hide all option panels first
	document.getElementById('backgroundSolidOptions').style.display = 'none';
	document.getElementById('backgroundGradientOptions').style.display = 'none';
	document.getElementById('backgroundImageOptions').style.display = 'none';
	
	// Reset background GIF flags when switching away from image background
	if(backgroundStyle.value !== 'image') {
		backgroundGif = { hasAnimated: false, data: null, file: null };
		updateGifExportNote();
	}
	
	switch(backgroundStyle.value) {
		case 'solid':
			document.getElementById('backgroundSolidOptions').style.display = 'block';
			buttonBackground.style.backgroundColor = document.getElementById('backgroundColourControl').value;
			buttonBackground.style.backgroundImage = 'none';
			localStorage.setItem('backgroundColour', document.getElementById('backgroundColourControl').value);
			break;
			
		case 'gradient':
			document.getElementById('backgroundGradientOptions').style.display = 'block';
			const colour1 = document.getElementById('backgroundColour1Control').value;
			const colour2 = document.getElementById('backgroundColour2Control').value;
			const gradientType = document.getElementById('backgroundGradientControl').value;
			
			let gradientCSS;
			switch(gradientType) {
				case 'horizontal':
					gradientCSS = `linear-gradient(180deg, ${colour1}, ${colour2})`;
					break;
				case 'vertical':
					gradientCSS = `linear-gradient(90deg, ${colour1}, ${colour2})`;
					break;
				case 'radial':
					gradientCSS = `radial-gradient(${colour1}, ${colour2})`;
					break;
				case 'diagonal':
					gradientCSS = `linear-gradient(135deg, ${colour1}, ${colour2})`;
					break;
			}
			buttonBackground.style.backgroundImage = gradientCSS;
			localStorage.setItem('backgroundColour1', colour1);
			localStorage.setItem('backgroundColour2', colour2);
			localStorage.setItem('backgroundGradient', gradientType);
			break;
			
		case 'image':
			document.getElementById('backgroundImageOptions').style.display = 'block';
			const fileInput = document.getElementById('backgroundImageControl');
			
			if(fileInput.files.length > 0) {
				const file = fileInput.files[0];
				const reader = new FileReader();
				trackEvent('Design', 'Upload Background Image', file.type);
				
				reader.onload = function(e) {
					buttonBackground.style.backgroundColor = 'transparent';
					buttonBackground.style.backgroundImage = `url(${e.target.result})`;
					
					// Check if it's an animated GIF, otherwise reset background GIF flags
					if(file.type === 'image/gif') {
						checkIfAnimatedGif(file, 'background');
					} else {
						// Reset background GIF flags for non-GIF images
						backgroundGif = { hasAnimated: false, data: null, file: null };
						updateGifExportNote();
					}
				};
				reader.readAsDataURL(file);
			}
			localStorage.setItem('backgroundStyle', 'solid'); // Reset to solid for persistence
			break;
	}
	
	// Update GIF note based on current selections (background style may have changed)
	updateGifExportNote();
}

// Icon controls
function controlIconType(md = null) {
	const iconType = document.getElementById('iconTypeControl');
	const buttonIcon = document.getElementById('buttonIcon');
	const buttonIconInner = document.getElementById('buttonIconInner');
	const iconSize = document.getElementById('iconSizeControl');
	const iconPosition = document.getElementById('iconPositionControl');
	const iconColour = document.getElementById('iconColourControl');
	const iconText = document.getElementById('iconTextControl');
	
	// Save to localStorage
	localStorage.setItem('iconType', iconType.value);
	localStorage.setItem('iconSize', iconSize.value);
	localStorage.setItem('iconPosition', iconPosition.value);
	localStorage.setItem('iconColour', iconColour.value);
	localStorage.setItem('iconText', iconText.value);
	
	if(md) {
		localStorage.setItem('iconMd', md.dataset.iconUrl);
		trackEvent('Design', 'Select Icon', md.dataset.iconUrl);
		// Update selected state
		document.querySelectorAll('#iconGrid .icon').forEach(i => i.classList.remove('selected'));
		md.classList.add('selected');
	}
	
	// Position handling
	if(iconPosition.value === 'inline') {
		buttonIcon.style.position = 'relative';
		buttonIcon.style.height = iconSize.value;
	} else {
		buttonIcon.style.position = 'absolute';
		buttonIcon.style.height = '100%';
	}
	
	// Hide all icon-specific options first
	document.querySelectorAll('.charIconOptions, .uploadIconOptions, .mdIconOptions').forEach(el => {
		el.style.display = 'none';
	});
	
	switch(iconType.value) {
		case 'none':
			buttonIcon.style.display = 'none';
			break;
			
		case 'md':
			document.querySelectorAll('.mdIconOptions').forEach(el => el.style.display = 'block');
			buttonIcon.style.display = 'flex';
			buttonIconInner.style.fontSize = iconSize.value;
			buttonIconInner.style.height = iconSize.value;
			
			const iconName = localStorage.getItem('iconMd') || 'sentiment_very_satisfied';
			buttonIconInner.innerHTML = `<span class="material-symbols-outlined">${iconName}</span>`;
			buttonIconInner.querySelector('span').style.fontSize = iconSize.value;
			buttonIconInner.style.color = iconColour.value;
			break;
			
		case 'char':
			document.querySelectorAll('.charIconOptions').forEach(el => el.style.display = 'block');
			buttonIcon.style.display = 'flex';
			buttonIconInner.style.fontSize = iconSize.value;
			buttonIconInner.style.color = iconColour.value;
			buttonIconInner.innerHTML = `<div class="char-text">${iconText.value}</div>`;
			break;
			
		case 'upload':
			document.querySelectorAll('.uploadIconOptions').forEach(el => el.style.display = 'block');
			buttonIcon.style.display = 'flex';
			buttonIconInner.style.height = iconSize.value;
			
			const uploadInput = document.getElementById('iconUploadControl');
			if(uploadInput.files.length > 0) {
				const file = uploadInput.files[0];
				const reader = new FileReader();
				trackEvent('Design', 'Upload Icon Image', file.type);
				
				reader.onload = function(e) {
					// For SVGs, we need special handling
					if(file.type === 'image/svg+xml') {
						buttonIconInner.innerHTML = `<img src="${e.target.result}" style="height: 100%; width: auto; max-width: 100%;">`;
					} else {
						buttonIconInner.innerHTML = `<img src="${e.target.result}">`;
					}
					
					// Check for animated GIF in icon
					if(file.type === 'image/gif') {
						checkIfAnimatedGif(file, 'icon');
					} else {
						iconGif = { hasAnimated: false, data: null, file: null };
						updateGifExportNote();
					}
				};
				reader.readAsDataURL(file);
			}
			break;
	}
	
	// Update GIF note based on current selections (icon type may have changed)
	updateGifExportNote();
}

// Overlay control
function controlOverlay() {
	const overlay = document.getElementById('overlayControl');
	const buttonOverlay = document.getElementById('buttonOverlay');
	buttonOverlay.src = 'assets/overlays/' + overlay.value;
	localStorage.setItem('overlay', overlay.value);
	if(overlay.value !== 'none.png') {
		trackEvent('Design', 'Change Overlay', overlay.value);
	}
}

// Icon search with improved tag matching
function iconSearch(elem) {
	const query = elem.value.toLowerCase().trim();
	const icons = document.querySelectorAll('#iconGrid .icon');
	
	if(!query) {
		icons.forEach(icon => icon.style.display = 'flex');
		return;
	}
	
	icons.forEach(icon => {
		const searchData = icon.dataset.search.toLowerCase();
		const tags = (icon.dataset.tags || '').toLowerCase();
		
		if(searchData.includes(query) || tags.includes(query)) {
			icon.style.display = 'flex';
		} else {
			icon.style.display = 'none';
		}
	});
}

// Category filter
function filterIconsByCategory(category) {
	const icons = document.querySelectorAll('#iconGrid .icon');
	const searchInput = document.getElementById('iconSearchInput');
	searchInput.value = ''; // Clear search
	
	if(category === 'all') {
		icons.forEach(icon => icon.style.display = 'flex');
	} else {
		icons.forEach(icon => {
			if(icon.dataset.category === category) {
				icon.style.display = 'flex';
			} else {
				icon.style.display = 'none';
			}
		});
	}
}

// Check if a GIF is animated (source: 'background' or 'icon')
function checkIfAnimatedGif(file, source) {
	const reader = new FileReader();
	reader.onload = function(e) {
		const arr = new Uint8Array(e.target.result);
		// Check for GIF89a animation extension
		let isAnimated = false;
		
		// Look for multiple image descriptors (0x2C) which indicates animation
		let imageCount = 0;
		for(let i = 0; i < arr.length - 1; i++) {
			if(arr[i] === 0x00 && arr[i+1] === 0x2C) {
				imageCount++;
			}
		}
		
		// Also check for graphic control extension (0x21 0xF9) which is used in animated GIFs
		for(let i = 0; i < arr.length - 1; i++) {
			if(arr[i] === 0x21 && arr[i+1] === 0xF9) {
				isAnimated = true;
				break;
			}
		}
		
		const hasAnimated = isAnimated && imageCount > 1;
		const targetGif = source === 'background' ? backgroundGif : iconGif;
		
		if(hasAnimated) {
			// Store the original file for export
			targetGif.hasAnimated = true;
			targetGif.file = file;
			const dataReader = new FileReader();
			dataReader.onload = function(e) {
				targetGif.data = e.target.result;
				updateGifExportNote();
			};
			dataReader.readAsDataURL(file);
		} else {
			targetGif.hasAnimated = false;
			targetGif.file = null;
			targetGif.data = null;
			updateGifExportNote();
		}
	};
	reader.readAsArrayBuffer(file);
}

// Check if currently selected options include an animated GIF
function getActiveAnimatedGif() {
	const backgroundStyle = document.getElementById('backgroundStyleControl').value;
	const iconType = document.getElementById('iconTypeControl').value;
	
	// Check background first (takes priority for export)
	if(backgroundStyle === 'image' && backgroundGif.hasAnimated && backgroundGif.file) {
		return { source: 'background', gif: backgroundGif };
	}
	
	// Check icon
	if(iconType === 'upload' && iconGif.hasAnimated && iconGif.file) {
		return { source: 'icon', gif: iconGif };
	}
	
	return null;
}

// Update GIF export note visibility
function updateGifExportNote() {
	const note = document.getElementById('gifExportNote');
	if(note) {
		const activeGif = getActiveAnimatedGif();
		note.style.display = activeGif ? 'flex' : 'none';
	}
}

// Generate icon grid HTML
function generateIconGrid() {
	const iconGrid = document.getElementById('iconGrid');
	if(!iconGrid) return;
	
	let html = '';
	materialIcons.forEach(icon => {
		const searchString = `${icon.name} ${icon.name.replace(/_/g, ' ')} ${icon.tags.join(' ')}`;
		html += `<span data-search="${searchString}" data-tags="${icon.tags.join(' ')}" data-category="${icon.category}" class="icon material-symbols-outlined" data-icon-url="${icon.name}" onclick="controlIconType(this)" title="${icon.name.replace(/_/g, ' ')}">${icon.name}</span>`;
	});
	iconGrid.innerHTML = html;
	
	// Set up category buttons
	document.querySelectorAll('.category-btn').forEach(btn => {
		btn.addEventListener('click', function() {
			document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
			this.classList.add('active');
			filterIconsByCategory(this.dataset.category);
		});
	});
}

// Reset to default settings
function resetToDefaults() {
	if(!confirm('Reset all settings to defaults? This will clear your current design.')) {
		return;
	}
	
	trackEvent('Design', 'Reset to Defaults');
	
	// Clear all localStorage
	localStorage.clear();
	
	// Reload the page to apply defaults
	location.reload();
}

// Initialize the application
function init() {
	// Check banner dismiss state
	checkBannerState();
	
	const controls = [
		'textText',
		'textSize',
		'textColour',
		'textFont',
		'textTracking',
		'textLineHeight',
		'textWeight',
		'textTransform',
		'borderWidth',
		'borderColour',
		'borderRadius',
		'backgroundStyle',
		'backgroundColour',
		'backgroundColour1',
		'backgroundColour2',
		'backgroundGradient',
		'overlay',
		'textShadow',
		'iconSize',
		'iconPosition',
		'iconColour',
		'iconText',
		'iconType',
		'iconOpacity',
		'iconRotation',
		'iconFlip',
		'badge',
		'badgePosition'
	];
	
	// Set defaults if not present
	if(!localStorage.getItem('iconMd')) {
		localStorage.setItem('iconMd', 'radio_button_checked');
	}
	
	// Restore saved values
	controls.forEach(item => {
		const el = document.getElementById(item + 'Control');
		const saved = localStorage.getItem(item);
		if(el && saved) {
			el.value = saved;
		}
	});
	
	// Generate the icon grid
	generateIconGrid();
	
	// Apply all controls
	controlTextText();
	controlTextColour();
	controlTextFont();
	controlTextSize();
	controlTextTracking();
	controlTextLineHeight();
	controlTextWeight();
	controlTextTransform();
	controlBorderWidth();
	controlBorderColour();
	controlBorderRadius();
	controlBackgroundStyle();
	controlOverlay();
	controlTextShadow();
	controlIconType();
	controlIconEffects();
	controlBadge();
	
	// Update range value displays
	document.getElementById('trackingValue').textContent = document.getElementById('textTrackingControl').value + 'px';
	document.getElementById('lineHeightValue').textContent = document.getElementById('textLineHeightControl').value;
	document.getElementById('iconOpacityValue').textContent = Math.round(document.getElementById('iconOpacityControl').value * 100) + '%';
	
	// Initialize Choices.js dropdowns
	const defaultChoices = document.querySelectorAll('[default-choices]');
	defaultChoices.forEach(currentValue => {
		new Choices(currentValue, {
			searchEnabled: false,
			shouldSort: false,
			allowHTML: true
		});
	});
	
	const searchChoices = document.querySelectorAll('[search-choices]');
	searchChoices.forEach(currentValue => {
		new Choices(currentValue, {
			searchEnabled: true,
			allowHTML: true
		});
	});
	
	// Font preview in dropdown
	const fontControl = document.getElementById('textFontControl');
	if(fontControl) {
		fontControl.addEventListener('showDropdown', updateFontPreviews, false);
		fontControl.addEventListener('search', updateFontPreviews, false);
	}
	
	// Enable event tracking after a short delay to ensure Choices.js is fully initialized
	// and any programmatic change events have fired
	setTimeout(() => {
		isInitializing = false;
		console.log('Event tracking enabled');
	}, 500);
	
	console.log('Button Designer initialized');
}

function updateFontPreviews() {
	const fontChoices = document.querySelectorAll('[id^=choices--textFontControl-item-choice]');
	fontChoices.forEach(currentValue => {
		currentValue.style.fontFamily = currentValue.getAttribute('data-value');
	});
}

// Get selected export size
function getExportSize() {
	const exportSizeControl = document.getElementById('exportSizeControl');
	return parseInt(exportSizeControl?.value || '144', 10);
}

// Download functionality - dynamic export size (144px default, 288px HD option)
document.getElementById("download").addEventListener("click", async function() {
	const previewButton = document.getElementById('preview-button');
	const filename = document.getElementById('textTextControl').value || 'button';
	const exportSize = getExportSize();
	
	// Check if we should export as animated GIF based on current selections
	const activeGif = getActiveAnimatedGif();
	if(activeGif) {
		trackEvent('Export', 'Download', 'GIF', exportSize);
		await exportAnimatedGif(previewButton, filename, activeGif, exportSize);
		return;
	}
	
	// Use pixelRatio to scale up to selected size (size/244)
	const pixelRatio = exportSize / 244;
	
	try {
		const dataUrl = await htmlToImage.toPng(previewButton, {
			quality: 1,
			pixelRatio: pixelRatio
		});
		
		// Track before download to ensure it's sent
		trackEvent('Export', 'Download', 'PNG', exportSize);
		
		const link = document.createElement('a');
		link.download = `${filename}.png`;
		link.href = dataUrl;
		link.click();
	} catch(error) {
		console.error('Export error:', error);
		alert('There was an error exporting the button. Please try again.');
		trackEvent('Export', 'Error', 'PNG');
	}
});

// Export animated GIF with button composition
async function exportAnimatedGif(previewButton, filename, activeGif, exportSize) {
	const buttonBackground = document.getElementById('buttonBackground');
	const buttonIconInner = document.getElementById('buttonIconInner');
	const originalBgImage = buttonBackground.style.backgroundImage;
	const originalIconHtml = buttonIconInner.innerHTML;
	
	const gifSource = activeGif.source;
	const gifData = activeGif.gif.data;
	
	// Show loading state
	const downloadBtn = document.getElementById('download');
	const originalBtnText = downloadBtn.innerHTML;
	downloadBtn.innerHTML = '<span class="material-symbols-outlined">hourglass_empty</span> Processing...';
	downloadBtn.disabled = true;
	
	try {
		console.log('Starting GIF export...', 'source:', gifSource);
		console.log('gifData exists:', !!gifData);
		
		// Parse GIF frames using a canvas-based approach
		const frames = await extractGifFrames(gifData);
		console.log('Extracted frames:', frames.length);
		
		if(frames.length === 0) {
			throw new Error('Could not extract frames from GIF');
		}
		
		// Create GIF encoder
		const gif = new GIF({
			workers: 2,
			quality: 10,
			width: exportSize,
			height: exportSize,
			workerScript: '/js/gif.worker.js'
		});
		
		const pixelRatio = exportSize / 244;
		
		// Process each frame
		for(let i = 0; i < frames.length; i++) {
			const frame = frames[i];
			console.log(`Processing frame ${i + 1}/${frames.length}`);
			
			// Apply frame to the correct element based on source
			if(gifSource === 'background') {
				buttonBackground.style.backgroundImage = `url(${frame.dataUrl})`;
			} else {
				// Icon source - update the icon image
				buttonIconInner.innerHTML = `<img src="${frame.dataUrl}">`;
			}
			
			// Wait a tick for the DOM to update
			await new Promise(resolve => setTimeout(resolve, 50));
			
			// Render the button with this frame
			const canvas = await htmlToImage.toCanvas(previewButton, {
				pixelRatio: pixelRatio
			});
			
			// Add frame to GIF
			gif.addFrame(canvas, { delay: frame.delay, copy: true });
		}
		
		console.log('All frames processed, rendering GIF...');
		
		// Restore original state
		buttonBackground.style.backgroundImage = originalBgImage;
		buttonIconInner.innerHTML = originalIconHtml;
		
		// Render the GIF
		gif.on('finished', function(blob) {
			console.log('GIF finished rendering, size:', blob.size);
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.download = `${filename}.gif`;
			link.href = url;
			link.click();
			URL.revokeObjectURL(url);
			
			// Restore button state
			downloadBtn.innerHTML = originalBtnText;
			downloadBtn.disabled = false;
		});
		
		gif.on('progress', function(p) {
			downloadBtn.innerHTML = `<span class="material-symbols-outlined">hourglass_empty</span> ${Math.round(p * 100)}%`;
		});
		
		gif.render();
		
	} catch(error) {
		console.error('GIF export error:', error);
		console.error('Error stack:', error.stack);
		alert('There was an error exporting the animated GIF. Falling back to PNG export.');
		
		// Restore original state
		buttonBackground.style.backgroundImage = originalBgImage;
		buttonIconInner.innerHTML = originalIconHtml;
		downloadBtn.innerHTML = originalBtnText;
		downloadBtn.disabled = false;
		
		// Fallback to PNG
		const fallbackPixelRatio = exportSize / 244;
		const dataUrl = await htmlToImage.toPng(previewButton, {
			quality: 1,
			pixelRatio: fallbackPixelRatio
		});
		const link = document.createElement('a');
		link.download = `${filename}.png`;
		link.href = dataUrl;
		link.click();
	}
}

// Extract frames from an animated GIF using omggif
async function extractGifFrames(gifDataUrl) {
	try {
		// Convert data URL to array buffer
		const response = await fetch(gifDataUrl);
		const buffer = await response.arrayBuffer();
		const uint8 = new Uint8Array(buffer);
		
		// Parse GIF using omggif
		const gif = new GifReader(uint8);
		const numFrames = gif.numFrames();
		
		console.log('omggif parsed frames:', numFrames);
		
		if(numFrames === 0) {
			throw new Error('No frames found');
		}
		
		const gifWidth = gif.width;
		const gifHeight = gif.height;
		
		// Create a master canvas for compositing frames
		const masterCanvas = document.createElement('canvas');
		masterCanvas.width = gifWidth;
		masterCanvas.height = gifHeight;
		const masterCtx = masterCanvas.getContext('2d');
		
		// Create a frame canvas
		const frameCanvas = document.createElement('canvas');
		frameCanvas.width = gifWidth;
		frameCanvas.height = gifHeight;
		const frameCtx = frameCanvas.getContext('2d');
		
		const extractedFrames = [];
		
		for(let i = 0; i < numFrames; i++) {
			const frameInfo = gif.frameInfo(i);
			
			// Create pixel buffer for this frame
			const framePixels = new Uint8Array(gifWidth * gifHeight * 4);
			
			// Decode frame into pixel buffer
			gif.decodeAndBlitFrameRGBA(i, framePixels);
			
			// Create ImageData from the frame pixels
			const imageData = new ImageData(
				new Uint8ClampedArray(framePixels),
				gifWidth,
				gifHeight
			);
			
			// Put frame on frame canvas
			frameCtx.putImageData(imageData, 0, 0);
			
			// Draw frame onto master canvas
			masterCtx.drawImage(frameCanvas, 0, 0);
			
			// Save composited frame
			extractedFrames.push({
				dataUrl: masterCanvas.toDataURL('image/png'),
				delay: frameInfo.delay * 10 || 100 // delay is in centiseconds, convert to ms
			});
			
			// Handle disposal
			if(frameInfo.disposal === 2) {
				// Restore to background
				masterCtx.clearRect(frameInfo.x, frameInfo.y, frameInfo.width, frameInfo.height);
			} else if(frameInfo.disposal === 3) {
				// Restore to previous - we'd need to save previous state
				// For now just clear
				masterCtx.clearRect(frameInfo.x, frameInfo.y, frameInfo.width, frameInfo.height);
			}
		}
		
		return extractedFrames;
		
	} catch(e) {
		console.error('Error extracting GIF frames:', e);
		
		// Fallback: just use the static image
		return new Promise((resolve) => {
			const img = new Image();
			img.onload = function() {
				const canvas = document.createElement('canvas');
				canvas.width = img.width;
				canvas.height = img.height;
				const ctx = canvas.getContext('2d');
				ctx.drawImage(img, 0, 0);
				resolve([{ dataUrl: canvas.toDataURL(), delay: 100 }]);
			};
			img.onerror = () => resolve([]);
			img.src = gifDataUrl;
		});
	}
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}
