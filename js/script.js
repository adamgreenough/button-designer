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

// ========================================
// TEMPLATES FEATURE
// ========================================

// Default starter templates with attractive designs
const defaultTemplates = [
	{
		id: 'default-live',
		name: 'Live Stream',
		settings: {
			textText: 'Go Live',
			textSize: '56px',
			textColour: '#ffffff',
			textFont: 'Bebas Neue',
			textTracking: '3',
			textLineHeight: '0.9',
			textWeight: '400',
			textTransform: 'uppercase',
			textShadow: 'shadow',
			backgroundStyle: 'gradient',
			backgroundColour: '#ef4444',
			backgroundColour1: '#dc2626',
			backgroundColour2: '#7f1d1d',
			backgroundGradient: 'radial',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '0px',
			borderColour: '#ffffff',
			borderRadius: '15%',
			overlay: 'gloss-over.png',
			iconType: 'md',
			iconMd: 'sensors',
			iconSize: '110px',
			iconPosition: 'inline',
			iconColour: '#ffffff',
			iconText: '',
			iconUrl: '',
			iconOpacity: '1',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'none',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-mute',
		name: 'Mute Mic',
		settings: {
			textText: 'MUTE',
			textSize: '24px',
			textColour: '#ffffff',
			textFont: 'Inter',
			textTracking: '3',
			textLineHeight: '0.9',
			textWeight: '600',
			textTransform: 'uppercase',
			textShadow: 'shadow',
			backgroundStyle: 'solid',
			backgroundColour: '#1e293b',
			backgroundColour1: '#1e293b',
			backgroundColour2: '#0f172a',
			backgroundGradient: 'vertical',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '6px',
			borderColour: '#ef4444',
			borderRadius: '15%',
			overlay: 'none.png',
			iconType: 'md',
			iconMd: 'mic_off',
			iconSize: '110px',
			iconPosition: 'inline',
			iconColour: '#ef4444',
			iconText: '',
			iconUrl: '',
			iconOpacity: '1',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'none',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-gaming',
		name: 'Game Mode',
		settings: {
			textText: 'GAME',
			textSize: '44px',
			textColour: '#00ff88',
			textFont: 'Press Start 2P',
			textTracking: '0',
			textLineHeight: '1.1',
			textWeight: '400',
			textTransform: 'uppercase',
			textShadow: 'glow',
			backgroundStyle: 'gradient',
			backgroundColour: '#0f0f23',
			backgroundColour1: '#0f0f23',
			backgroundColour2: '#1a1a3e',
			backgroundGradient: 'radial',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '6px',
			borderColour: '#00ff88',
			borderRadius: '15%',
			overlay: 'scanlines.png',
			iconType: 'md',
			iconMd: 'sports_esports',
			iconSize: '110px',
			iconPosition: 'inline',
			iconColour: '#00ff88',
			iconText: '',
			iconUrl: '',
			iconOpacity: '1',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'glow',
			badge: 'none',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-scene',
		name: 'Scene Switch',
		settings: {
			textText: 'Scene 1',
			textSize: '24px',
			textColour: '#ffffff',
			textFont: 'Poppins',
			textTracking: '0',
			textLineHeight: '0.9',
			textWeight: '600',
			textTransform: 'none',
			textShadow: 'shadow',
			backgroundStyle: 'gradient',
			backgroundColour: '#6366f1',
			backgroundColour1: '#6366f1',
			backgroundColour2: '#4338ca',
			backgroundGradient: 'diagonal',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '0px',
			borderColour: '#ffffff',
			borderRadius: '15%',
			overlay: 'jelly.png',
			iconType: 'md',
			iconMd: 'dashboard',
			iconSize: '80px',
			iconPosition: 'inline',
			iconColour: '#ffffff',
			iconText: '',
			iconUrl: '',
			iconOpacity: '0.9',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'none',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-music',
		name: 'Play Music',
		settings: {
			textText: '',
			textSize: '32px',
			textColour: '#ffffff',
			textFont: 'Hubot Sans',
			textTracking: '0',
			textLineHeight: '0.9',
			textWeight: '700',
			textTransform: 'none',
			textShadow: 'none',
			backgroundStyle: 'gradient',
			backgroundColour: '#1db954',
			backgroundColour1: '#1db954',
			backgroundColour2: '#14833b',
			backgroundGradient: 'vertical',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '0px',
			borderColour: '#ffffff',
			borderRadius: '50%',
			overlay: 'gloss-diagonal.png',
			iconType: 'md',
			iconMd: 'play_arrow',
			iconSize: '140px',
			iconPosition: 'inline',
			iconColour: '#ffffff',
			iconText: '',
			iconUrl: '',
			iconOpacity: '1',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'none',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-discord',
		name: 'Discord',
		settings: {
			textText: 'Discord',
			textSize: '28px',
			textColour: '#ffffff',
			textFont: 'Nunito',
			textTracking: '0',
			textLineHeight: '0.9',
			textWeight: '700',
			textTransform: 'none',
			textShadow: 'shadow',
			backgroundStyle: 'solid',
			backgroundColour: '#5865f2',
			backgroundColour1: '#5865f2',
			backgroundColour2: '#4752c4',
			backgroundGradient: 'vertical',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '0px',
			borderColour: '#ffffff',
			borderRadius: '15%',
			overlay: 'none.png',
			iconType: 'md',
			iconMd: 'headset_mic',
			iconSize: '180px',
			iconPosition: 'behind',
			iconColour: '#ffffff',
			iconText: '',
			iconUrl: '',
			iconOpacity: '0.2',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'green',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-brb',
		name: 'Be Right Back',
		settings: {
			textText: 'BRB',
			textSize: '56px',
			textColour: '#fbbf24',
			textFont: 'Permanent Marker',
			textTracking: '2',
			textLineHeight: '0.9',
			textWeight: '400',
			textTransform: 'uppercase',
			textShadow: 'shadow',
			backgroundStyle: 'gradient',
			backgroundColour: '#1e1b4b',
			backgroundColour1: '#312e81',
			backgroundColour2: '#0f0a1e',
			backgroundGradient: 'radial',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '0px',
			borderColour: '#fbbf24',
			borderRadius: '15%',
			overlay: 'vignette.png',
			iconType: 'md',
			iconMd: 'schedule',
			iconSize: '80px',
			iconPosition: 'inline',
			iconColour: '#fbbf24',
			iconText: '',
			iconUrl: '',
			iconOpacity: '0.8',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'orange',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-recording',
		name: 'Recording',
		settings: {
			textText: 'REC',
			textSize: '32px',
			textColour: '#ffffff',
			textFont: 'JetBrains Mono',
			textTracking: '3',
			textLineHeight: '0.9',
			textWeight: '700',
			textTransform: 'uppercase',
			textShadow: 'glow',
			backgroundStyle: 'solid',
			backgroundColour: '#18181b',
			backgroundColour1: '#18181b',
			backgroundColour2: '#09090b',
			backgroundGradient: 'vertical',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '3px',
			borderColour: '#ef4444',
			borderRadius: '15%',
			overlay: 'inner-shadow.png',
			iconType: 'md',
			iconMd: 'radio_button_checked',
			iconSize: '80px',
			iconPosition: 'inline',
			iconColour: '#ef4444',
			iconText: '',
			iconUrl: '',
			iconOpacity: '1',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'glow',
			badge: 'red',
			badgePosition: 'top-left'
		}
	},
	{
		id: 'default-soundfx',
		name: 'Sound Effect',
		settings: {
			textText: 'Air Horn',
			textSize: '32px',
			textColour: '#ffffff',
			textFont: 'Quicksand',
			textTracking: '0',
			textLineHeight: '0.9',
			textWeight: '700',
			textTransform: 'none',
			textShadow: 'shadow',
			backgroundStyle: 'gradient',
			backgroundColour: '#f97316',
			backgroundColour1: '#fb923c',
			backgroundColour2: '#c2410c',
			backgroundGradient: 'diagonal',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '0px',
			borderColour: '#ffffff',
			borderRadius: '15%',
			overlay: 'jelly.png',
			iconType: 'char',
			iconMd: 'volume_up',
			iconSize: '110px',
			iconPosition: 'inline',
			iconColour: '#ffffff',
			iconText: '📯',
			iconUrl: '',
			iconOpacity: '1',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'none',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-focus',
		name: 'Focus Mode',
		settings: {
			textText: 'FOCUS',
			textSize: '56px',
			textColour: '#ffffff',
			textFont: 'Bebas Neue',
			textTracking: '4',
			textLineHeight: '0.9',
			textWeight: '400',
			textTransform: 'uppercase',
			textShadow: 'shadow',
			backgroundStyle: 'gradient',
			backgroundColour: '#0ea5e9',
			backgroundColour1: '#0284c7',
			backgroundColour2: '#0c4a6e',
			backgroundGradient: 'radial',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '0px',
			borderColour: '#ffffff',
			borderRadius: '15%',
			overlay: 'none.png',
			iconType: 'md',
			iconMd: 'do_not_disturb_on',
			iconSize: '180px',
			iconPosition: 'behind',
			iconColour: '#ffffff',
			iconText: '',
			iconUrl: '',
			iconOpacity: '0.15',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'none',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-screenshot',
		name: 'Screenshot',
		settings: {
			textText: '',
			textSize: '32px',
			textColour: '#ffffff',
			textFont: 'Inter',
			textTracking: '0',
			textLineHeight: '0.9',
			textWeight: '600',
			textTransform: 'none',
			textShadow: 'none',
			backgroundStyle: 'gradient',
			backgroundColour: '#8b5cf6',
			backgroundColour1: '#a78bfa',
			backgroundColour2: '#5b21b6',
			backgroundGradient: 'diagonal',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '6px',
			borderColour: '#ffffff',
			borderRadius: '15%',
			overlay: 'corner-glow.png',
			iconType: 'md',
			iconMd: 'screenshot',
			iconSize: '110px',
			iconPosition: 'inline',
			iconColour: '#ffffff',
			iconText: '',
			iconUrl: '',
			iconOpacity: '1',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'none',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-clip',
		name: 'Clip That',
		settings: {
			textText: 'CLIP',
			textSize: '28px',
			textColour: '#ffffff',
			textFont: 'Oswald',
			textTracking: '2',
			textLineHeight: '0.9',
			textWeight: '700',
			textTransform: 'uppercase',
			textShadow: 'shadow',
			backgroundStyle: 'gradient',
			backgroundColour: '#ec4899',
			backgroundColour1: '#f472b6',
			backgroundColour2: '#9d174d',
			backgroundGradient: 'radial',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '0px',
			borderColour: '#ffffff',
			borderRadius: '15%',
			overlay: 'gloss-over.png',
			iconType: 'md',
			iconMd: 'movie_creation',
			iconSize: '80px',
			iconPosition: 'inline',
			iconColour: '#ffffff',
			iconText: '',
			iconUrl: '',
			iconOpacity: '1',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'none',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-camera',
		name: 'Camera Toggle',
		settings: {
			textText: 'CAM',
			textSize: '24px',
			textColour: '#ffffff',
			textFont: 'Inter',
			textTracking: '1',
			textLineHeight: '0.9',
			textWeight: '600',
			textTransform: 'uppercase',
			textShadow: 'shadow',
			backgroundStyle: 'gradient',
			backgroundColour: '#0891b2',
			backgroundColour1: '#06b6d4',
			backgroundColour2: '#164e63',
			backgroundGradient: 'vertical',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '0px',
			borderColour: '#ffffff',
			borderRadius: '15%',
			overlay: 'jelly.png',
			iconType: 'md',
			iconMd: 'videocam',
			iconSize: '80px',
			iconPosition: 'inline',
			iconColour: '#ffffff',
			iconText: '',
			iconUrl: '',
			iconOpacity: '1',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'green',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-counter',
		name: 'Counter',
		settings: {
			textText: '',
			textSize: '28px',
			textColour: '#ffffff',
			textFont: 'Inter',
			textTracking: '0',
			textLineHeight: '0.9',
			textWeight: '700',
			textTransform: 'none',
			textShadow: 'none',
			backgroundStyle: 'gradient',
			backgroundColour: '#22c55e',
			backgroundColour1: '#4ade80',
			backgroundColour2: '#15803d',
			backgroundGradient: 'radial',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '0px',
			borderColour: '#ffffff',
			borderRadius: '15%',
			overlay: 'jelly.png',
			iconType: 'char',
			iconMd: 'add',
			iconSize: '80px',
			iconPosition: 'inline',
			iconColour: '#ffffff',
			iconText: '+1',
			iconUrl: '',
			iconOpacity: '1',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'none',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-chat',
		name: 'Chat',
		settings: {
			textText: 'CHAT',
			textSize: '26px',
			textColour: '#ffffff',
			textFont: 'Quicksand',
			textTracking: '1',
			textLineHeight: '0.9',
			textWeight: '700',
			textTransform: 'uppercase',
			textShadow: 'shadow',
			backgroundStyle: 'gradient',
			backgroundColour: '#10b981',
			backgroundColour1: '#34d399',
			backgroundColour2: '#065f46',
			backgroundGradient: 'diagonal',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '0px',
			borderColour: '#ffffff',
			borderRadius: '15%',
			overlay: 'spotlight.png',
			iconType: 'md',
			iconMd: 'chat_bubble',
			iconSize: '80px',
			iconPosition: 'inline',
			iconColour: '#ffffff',
			iconText: '',
			iconUrl: '',
			iconOpacity: '1',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'none',
			badgePosition: 'top-right'
		}
	},
	{
		id: 'default-sponsor',
		name: 'Sponsor',
		settings: {
			textText: 'Thanks!',
			textSize: '28px',
			textColour: '#ffffff',
			textFont: 'Pacifico',
			textTracking: '0',
			textLineHeight: '0.9',
			textWeight: '400',
			textTransform: 'none',
			textShadow: 'shadow',
			backgroundStyle: 'gradient',
			backgroundColour: '#7c3aed',
			backgroundColour1: '#a78bfa',
			backgroundColour2: '#4c1d95',
			backgroundGradient: 'radial',
			backgroundUrl: '',
			backgroundOverlay: '0',
			borderWidth: '0px',
			borderColour: '#ffffff',
			borderRadius: '15%',
			overlay: 'jelly.png',
			iconType: 'char',
			iconMd: 'favorite',
			iconSize: '80px',
			iconPosition: 'inline',
			iconColour: '#f472b6',
			iconText: '❤️',
			iconUrl: '',
			iconOpacity: '1',
			iconRotation: '0',
			iconFlip: 'none',
			iconShadow: 'none',
			badge: 'none',
			badgePosition: 'top-right'
		}
	}
];

// Template storage key
const TEMPLATES_STORAGE_KEY = 'buttonDesigner_templates';

// Get user templates from localStorage
function getUserTemplates() {
	try {
		const stored = localStorage.getItem(TEMPLATES_STORAGE_KEY);
		return stored ? JSON.parse(stored) : [];
	} catch(e) {
		console.error('Error loading templates:', e);
		return [];
	}
}

// Save user templates to localStorage
function setUserTemplates(templates) {
	try {
		localStorage.setItem(TEMPLATES_STORAGE_KEY, JSON.stringify(templates));
		renderUserTemplates();
		updateUserTemplateCount();
	} catch(e) {
		console.error('Error saving templates:', e);
		alert('Could not save template. Your browser storage may be full.');
	}
}

// Get current design settings as a template object
function getCurrentSettings() {
	const settings = {};
	const controls = [
		'textText', 'textSize', 'textColour', 'textFont', 'textTracking', 'textLineHeight',
		'textWeight', 'textTransform', 'textShadow', 'backgroundStyle', 'backgroundColour',
		'backgroundColour1', 'backgroundColour2', 'backgroundGradient', 'backgroundOverlay',
		'borderWidth', 'borderColour', 'borderRadius', 'overlay', 'iconType', 'iconSize', 'iconPosition',
		'iconColour', 'iconText', 'iconUrl', 'iconOpacity', 'iconRotation', 'iconFlip', 'iconShadow', 'badge', 'badgePosition'
	];
	
	controls.forEach(key => {
		const el = document.getElementById(key + 'Control');
		if(el) {
			settings[key] = el.value;
		}
	});
	
	// Get iconMd from localStorage since it's set differently
	settings.iconMd = localStorage.getItem('iconMd') || 'radio_button_checked';
	
	return settings;
}

// Check if current design uses custom uploaded images
function hasCustomImage() {
	const info = getCustomImageInfo();
	return info.hasBackgroundImage || info.hasIconImage;
}

// Get detailed info about custom images
function getCustomImageInfo() {
	const backgroundStyle = document.getElementById('backgroundStyleControl')?.value;
	const iconType = document.getElementById('iconTypeControl')?.value;
	const bgFileInput = document.getElementById('backgroundImageControl');
	const iconFileInput = document.getElementById('iconUploadControl');
	
	return {
		hasBackgroundImage: backgroundStyle === 'image' && bgFileInput?.files?.length > 0,
		hasIconImage: iconType === 'upload' && iconFileInput?.files?.length > 0
	};
}

// Apply template settings to the UI
function applyTemplate(settings, showNotification = false, notificationMessage = '') {
	// Apply each setting to its control
	Object.keys(settings).forEach(key => {
		const el = document.getElementById(key + 'Control');
		if(el) {
			// Convert \n to actual newlines for text fields
			let value = settings[key];
			if(key === 'textText' && typeof value === 'string') {
				value = value.replace(/\\n/g, '\n');
			}
			el.value = value;
			// Also update localStorage
			localStorage.setItem(key, value);
		}
	});
	
	// Handle iconMd specially
	if(settings.iconMd) {
		localStorage.setItem('iconMd', settings.iconMd);
	}
	
	// Update Choices.js dropdowns FIRST so the UI reflects correct selections
	updateChoicesDropdowns();
	
	// Trigger all control functions to update the preview
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
	controlBackgroundOverlay();
	controlOverlay();
	controlTextShadow();
	controlIconType();
	controlIconEffects();
	controlBadge();
	
	// Update range value displays
	document.getElementById('trackingValue').textContent = document.getElementById('textTrackingControl').value + 'px';
	document.getElementById('lineHeightValue').textContent = document.getElementById('textLineHeightControl').value;
	document.getElementById('iconOpacityValue').textContent = Math.round(document.getElementById('iconOpacityControl').value * 100) + '%';
	const overlayValueEl = document.getElementById('backgroundOverlayValue');
	const overlayControlEl = document.getElementById('backgroundOverlayControl');
	if(overlayValueEl && overlayControlEl) {
		overlayValueEl.textContent = Math.round(parseFloat(overlayControlEl.value) * 100) + '%';
	}
	
	if(showNotification && notificationMessage) {
		showTemplateNotification(notificationMessage);
	}
}

// Update Choices.js dropdowns after changing values programmatically
function updateChoicesDropdowns() {
	// Get all Choices.js instances and update them
	const selects = ['textFontControl', 'textSizeControl', 'textWeightControl', 'textTransformControl',
		'textShadowControl', 'iconTypeControl', 'iconSizeControl', 'iconPositionControl',
		'backgroundStyleControl', 'backgroundGradientControl', 'borderWidthControl', 'borderRadiusControl',
		'overlayControl', 'badgeControl', 'badgePositionControl', 'iconRotationControl', 'iconFlipControl',
		'exportSizeControl'];
	
	selects.forEach(id => {
		const el = document.getElementById(id);
		if(el && window.choicesInstances && window.choicesInstances[id]) {
			window.choicesInstances[id].setChoiceByValue(el.value);
		}
	});
}

// Load a template (either default or user-saved)
function loadTemplate(templateId, isDefault = false) {
	let template;
	
	if(isDefault) {
		template = defaultTemplates.find(t => t.id === templateId);
	} else {
		const userTemplates = getUserTemplates();
		template = userTemplates.find(t => t.id === templateId);
	}
	
	if(!template) {
		console.error('Template not found:', templateId);
		return;
	}
	
	// Check if template has custom image flags (support both old and new format)
	const hasCustomBg = template.hasCustomBackgroundImage || (template.hasCustomImage && template.settings?.backgroundStyle === 'image');
	const hasCustomIcon = template.hasCustomIconImage || (template.hasCustomImage && template.settings?.iconType === 'upload');
	const hasAnyCustom = hasCustomBg || hasCustomIcon;
	
	if(hasAnyCustom) {
		let msg = 'Template loaded! This design originally used ';
		if(hasCustomBg && hasCustomIcon) {
			msg += 'custom images for both background and icon.';
		} else if(hasCustomBg) {
			msg += 'a custom background image.';
		} else {
			msg += 'a custom icon image.';
		}
		msg += ' Please re-upload in the appropriate section.';
		showTemplateNotification(msg, true);
	}
	
	applyTemplate(template.settings, !hasAnyCustom, `Template \"${template.name}\" loaded!`);
	
	// Track template load
	trackEvent('Template', 'Loaded', isDefault ? 'default' : 'user', templateId);
}

// Delete a user template
function deleteTemplate(templateId) {
	if(!confirm('Delete this template? This cannot be undone.')) {
		return;
	}
	
	const templates = getUserTemplates();
	const filtered = templates.filter(t => t.id !== templateId);
	setUserTemplates(filtered);
	
	trackEvent('Template', 'Deleted', 'user', templateId);
}

// Open save template modal
function openSaveTemplateModal() {
	const modal = document.getElementById('saveTemplateModal');
	const nameInput = document.getElementById('templateNameInput');
	const customImageWarning = document.getElementById('customImageWarning');
	
	// Pre-fill with current button text
	const currentText = document.getElementById('textTextControl')?.value || '';
	nameInput.value = currentText ? `${currentText} Button` : '';
	
	// Show/hide custom image warning
	if(hasCustomImage()) {
		customImageWarning.classList.remove('hidden');
	} else {
		customImageWarning.classList.add('hidden');
	}
	
	modal.classList.remove('hidden');
	nameInput.focus();
}

// Close save template modal
function closeSaveTemplateModal() {
	const modal = document.getElementById('saveTemplateModal');
	modal.classList.add('hidden');
}

// Save template from modal
function saveTemplate() {
	const nameInput = document.getElementById('templateNameInput');
	const name = nameInput.value.trim();
	
	if(!name) {
		alert('Please enter a template name.');
		nameInput.focus();
		return;
	}
	
	const templates = getUserTemplates();
	const newTemplate = {
		id: 'user-' + Date.now(),
		name: name,
		settings: getCurrentSettings(),
		hasCustomBackgroundImage: getCustomImageInfo().hasBackgroundImage,
		hasCustomIconImage: getCustomImageInfo().hasIconImage,
		createdAt: new Date().toISOString()
	};
	
	// If has custom image, reset those settings to defaults
	if(newTemplate.hasCustomBackgroundImage || newTemplate.hasCustomIconImage) {
		const bgStyle = document.getElementById('backgroundStyleControl')?.value;
		const iconType = document.getElementById('iconTypeControl')?.value;
		
		if(bgStyle === 'image') {
			newTemplate.settings.backgroundStyle = 'solid';
			newTemplate.settings.backgroundColour = '#894bb8';
		}
		if(iconType === 'upload') {
			newTemplate.settings.iconType = 'none';
		}
	}
	
	templates.unshift(newTemplate); // Add to beginning
	setUserTemplates(templates);
	
	closeSaveTemplateModal();
	showTemplateNotification(`Template \"${name}\" saved!`);
	
	// Open user templates section
	document.getElementById('userTemplatesSection').open = true;
	
	trackEvent('Template', 'Saved', 'user', newTemplate.id);
}

// Generate permalink for current design
function generatePermalink() {
	const settings = getCurrentSettings();
	
	// Mark if it has custom image
	if(hasCustomImage()) {
		settings._hasCustomImage = true;
		const bgStyle = document.getElementById('backgroundStyleControl')?.value;
		const iconType = document.getElementById('iconTypeControl')?.value;
		
		if(bgStyle === 'image') {
			settings.backgroundStyle = 'solid';
		}
		if(iconType === 'upload') {
			settings.iconType = 'none';
		}
	}
	
	// Encode settings as base64 URL-safe string
	const jsonStr = JSON.stringify(settings);
	const encoded = btoa(encodeURIComponent(jsonStr));
	
	return window.location.origin + window.location.pathname + '#template=' + encoded;
}

// Copy permalink to clipboard
function copyPermalink() {
	const permalink = generatePermalink();
	const btn = document.getElementById('copyPermalinkBtn');
	const previewBtn = document.getElementById('previewPermalinkBtn');
	
	navigator.clipboard.writeText(permalink).then(() => {
		// Visual feedback for templates panel button
		if(btn) {
			btn.classList.add('copied');
			btn.innerHTML = '<span class="material-symbols-outlined">check</span>';
			setTimeout(() => {
				btn.classList.remove('copied');
				btn.innerHTML = '<span class="material-symbols-outlined">link</span>';
			}, 2000);
		}
		
		// Visual feedback for preview button
		if(previewBtn) {
			previewBtn.classList.add('copied');
			previewBtn.innerHTML = '<span class="material-symbols-outlined">check</span>';
			setTimeout(() => {
				previewBtn.classList.remove('copied');
				previewBtn.innerHTML = '<span class="material-symbols-outlined">link</span>';
			}, 2000);
		}
		
		// Show notification
		if(hasCustomImage()) {
			showTemplateNotification('Link copied! Note: Custom images cannot be included in the URL. Recipients will need to add their own images.', true);
		} else {
			showTemplateNotification('Shareable link copied to clipboard!');
		}
		
		trackEvent('Template', 'Permalink Copied', hasCustomImage() ? 'with-custom-image' : 'complete');
	}).catch(err => {
		console.error('Failed to copy:', err);
		// Fallback: show the URL in a prompt
		prompt('Copy this link:', permalink);
	});
}

// Load template from URL hash
function loadTemplateFromURL() {
	const hash = window.location.hash;
	if(!hash.startsWith('#template=')) {
		return false;
	}
	
	try {
		const encoded = hash.substring('#template='.length);
		const jsonStr = decodeURIComponent(atob(encoded));
		const settings = JSON.parse(jsonStr);
		
		const hadCustomImage = settings._hasCustomImage;
		delete settings._hasCustomImage;
		
		// Apply the template
		applyTemplate(settings, false);
		
		// Show appropriate notification
		if(hadCustomImage) {
			showTemplateNotification('Template loaded from shared link! This design originally used a custom image. Please upload your own image to complete the design.', true);
		} else {
			showTemplateNotification('Template loaded from shared link!');
		}
		
		// Open templates section
		document.getElementById('templatesSection').open = true;
		
		// Clear the hash to prevent re-loading on refresh (but keep in history)
		history.replaceState(null, '', window.location.pathname);
		
		trackEvent('Template', 'Loaded from URL', hadCustomImage ? 'with-custom-image' : 'complete');
		
		return true;
	} catch(e) {
		console.error('Failed to load template from URL:', e);
		return false;
	}
}

// Show template notification
function showTemplateNotification(message, isWarning = false) {
	const notification = document.getElementById('templateNotification');
	const textEl = document.getElementById('templateNotificationText');
	
	textEl.innerHTML = message;
	notification.classList.add('visible');
	notification.classList.toggle('warning', isWarning);
	
	// Open templates section if not already open
	const templatesSection = document.getElementById('templatesSection');
	if(templatesSection && !templatesSection.open) {
		templatesSection.open = true;
	}
	
	// Auto-dismiss after 5 seconds for success notifications
	if(!isWarning) {
		setTimeout(() => {
			dismissTemplateNotification();
		}, 5000);
	}
}

// Dismiss template notification
function dismissTemplateNotification() {
	const notification = document.getElementById('templateNotification');
	notification.classList.remove('visible');
}

// Render default templates grid
function renderDefaultTemplates() {
	const grid = document.getElementById('defaultTemplatesGrid');
	if(!grid) return;
	
	let html = '';
	defaultTemplates.forEach(template => {
		html += createTemplateCardHTML(template, true);
	});
	grid.innerHTML = html;
}

// Render user templates grid
function renderUserTemplates() {
	const grid = document.getElementById('userTemplatesGrid');
	if(!grid) return;
	
	const templates = getUserTemplates();
	
	if(templates.length === 0) {
		grid.innerHTML = '<div class="no-templates">No saved templates yet. Save your current design above!</div>';
		return;
	}
	
	let html = '';
	templates.forEach(template => {
		html += createTemplateCardHTML(template, false);
	});
	grid.innerHTML = html;
}

// Create HTML for a template card
function createTemplateCardHTML(template, isDefault) {
	const s = template.settings;
	
	// Check for custom images (support both old hasCustomImage and new separate flags)
	const hasCustomBg = template.hasCustomBackgroundImage || (template.hasCustomImage && s.backgroundStyle === 'image');
	const hasCustomIcon = template.hasCustomIconImage || (template.hasCustomImage && s.iconType === 'upload');
	
	// Generate background style
	let bgStyle = '';
	if(s.backgroundStyle === 'image' || hasCustomBg) {
		// Checkerboard pattern for custom background images (upload)
		bgStyle = 'background: repeating-conic-gradient(#808080 0% 25%, #c0c0c0 0% 50%) 50% / 20px 20px';
	} else if(s.backgroundStyle === 'gradient') {
		bgStyle = getGradientCSS(s.backgroundGradient, s.backgroundColour1, s.backgroundColour2);
	} else {
		bgStyle = `background-color: ${s.backgroundColour}`;
	}
	
	// Scale border width for preview (preview is 60px, actual is 288px = ~0.21 ratio)
	const scaledBorderWidth = s.borderWidth !== '0px' 
		? Math.max(1, Math.round(parseFloat(s.borderWidth) * 0.21)) + 'px'
		: '0px';
	const borderStyle = scaledBorderWidth !== '0px' 
		? `border: ${scaledBorderWidth} solid ${s.borderColour};` 
		: '';
	
	// Text shadow effect
	let textShadowCSS = '';
	switch(s.textShadow) {
		case 'shadow': textShadowCSS = 'text-shadow: 1px 1px 2px rgba(0,0,0,0.5);'; break;
		case 'outline': textShadowCSS = 'text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;'; break;
		case 'glow': textShadowCSS = `text-shadow: 0 0 5px ${s.textColour}, 0 0 10px ${s.textColour};`; break;
		case 'glow-hard': textShadowCSS = `text-shadow: 0 0 3px ${s.textColour}, 0 0 6px ${s.textColour};`; break;
	}
	
	// Icon handling
	const iconOpacity = s.iconOpacity || '1';
	const iconShadow = s.iconShadow || 'none';
	const isBehind = s.iconPosition === 'behind';
	const showIcon = s.iconType && s.iconType !== 'none' && s.iconType !== 'upload' && s.iconType !== 'url';
	
	// Build icon filter for shadow/glow
	let iconFilter = '';
	if(iconShadow === 'shadow') {
		iconFilter = 'filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.5));';
	} else if(iconShadow === 'glow') {
		iconFilter = `filter: drop-shadow(0 0 5px ${s.iconColour}80) drop-shadow(0 0 10px ${s.iconColour}50);`;
	}
	
	let iconHtml = '';
	if(showIcon) {
		const iconStyle = isBehind 
			? `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 3rem; color: ${s.iconColour}; opacity: ${iconOpacity}; z-index: 1; ${iconFilter}`
			: `font-size: 1.6rem; color: ${s.iconColour}; opacity: ${iconOpacity}; z-index: 2; position: relative; ${iconFilter}`;
		
		if(s.iconType === 'md') {
			iconHtml = `<span class="material-symbols-outlined" style="${iconStyle}">${s.iconMd}</span>`;
		} else if(s.iconType === 'char') {
			iconHtml = `<span style="${iconStyle}">${s.iconText || '😄'}</span>`;
		}
	}
	
	// Show external URL icon in preview
	if(s.iconType === 'url' && s.iconUrl) {
		const iconStyle = isBehind 
			? `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); height: 3rem; opacity: ${iconOpacity}; z-index: 1;`
			: `height: 1.6rem; opacity: ${iconOpacity}; z-index: 2; position: relative;`;
		iconHtml = `<img src="${s.iconUrl}" style="${iconStyle}">`;
	}
	
	// Show placeholder icon if custom uploaded icon image was used
	if(s.iconType === 'upload' || hasCustomIcon) {
		iconHtml = `<span class="material-symbols-outlined" style="font-size: 1.6rem; color: var(--text-muted); opacity: 0.5;">image</span>`;
	}
	
	const textHtml = s.textText 
		? `<span style="font-family: '${s.textFont}', sans-serif; font-size: .5rem; color: ${s.textColour}; font-weight: ${s.textWeight}; text-transform: ${s.textTransform}; line-height: 1.1; text-align: center; ${textShadowCSS} position: relative; z-index: 2; max-width: 90%; word-break: break-word;">${s.textText.replace(/\\n/g, ' ').replace(/\n/g, ' ')}</span>`
		: '';
	
	// Overlay
	const overlayHtml = (s.overlay && s.overlay !== 'none.png')
		? `<img src="assets/overlays/${s.overlay}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; border-radius: ${s.borderRadius}; mix-blend-mode: overlay; z-index: 10;">`
		: '';
	
	// Badge
	let badgeHtml = '';
	if(s.badge && s.badge !== 'none') {
		const badgeColors = { 'red': '#ef4444', 'green': '#22c55e', 'blue': '#3b82f6', 'yellow': '#eab308', 'orange': '#f97316', 'purple': '#a855f7' };
		const badgeColor = badgeColors[s.badge] || '#ef4444';
		const posStyles = { 'top-right': 'top:12%;right:12%', 'top-left': 'top:12%;left:12%', 'bottom-right': 'bottom:12%;right:12%', 'bottom-left': 'bottom:12%;left:12%' };
		badgeHtml = `<div style="position:absolute;${posStyles[s.badgePosition] || posStyles['top-right']};width:10%;height:10%;border-radius:50%;background:${badgeColor};box-shadow:0 0 3px ${badgeColor};z-index:20;border:1px solid rgba(255,255,255,0.8)"></div>`;
	}
	
	// Dark overlay for image backgrounds
	let darkOverlayHtml = '';
	const bgOverlay = parseFloat(s.backgroundOverlay) || 0;
	if(bgOverlay > 0 && s.backgroundStyle === 'image') {
		darkOverlayHtml = `<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:${bgOverlay};pointer-events:none;z-index:1;border-radius:${s.borderRadius};"></div>`;
	}
	
	const actions = isDefault 
		? ''
		: `<div class="template-card-actions">
			<button class="template-action-btn copy-btn" data-tooltip="Copy link" onclick="event.stopPropagation(); copyTemplatePermalink(this, '${template.id}')">
				<span class="material-symbols-outlined">link</span>
			</button>
			<button class="template-action-btn delete" data-tooltip="Delete" onclick="event.stopPropagation(); deleteTemplate('${template.id}')">
				<span class="material-symbols-outlined">delete</span>
			</button>
		</div>`;
	
	const hasAnyCustomImage = hasCustomBg || hasCustomIcon;
	const meta = isDefault 
		? '<span class="material-symbols-outlined" style="font-size: .75rem;">auto_awesome</span> Starter'
		: (hasAnyCustomImage 
			? '<span class="material-symbols-outlined" style="font-size: .75rem;">image</span> Has custom image'
			: '<span class="material-symbols-outlined" style="font-size: .75rem;">person</span> Custom');
	
	return `
		<div class="template-card" onclick="loadTemplate('${template.id}', ${isDefault})">
			${actions}
			<div class="template-card-preview">
				<div class="preview-placeholder" style="${bgStyle}; ${borderStyle} border-radius: ${s.borderRadius}; position: relative; overflow: hidden;">
					${darkOverlayHtml}
					${iconHtml}
					${textHtml}
					${overlayHtml}
					${badgeHtml}
				</div>
			</div>
			<div class="template-card-info">
				<div class="template-card-name">${escapeHtml(template.name)}</div>
				<div class="template-card-meta">${meta}</div>
			</div>
		</div>
	`;
}

// Helper to generate gradient CSS
function getGradientCSS(type, color1, color2) {
	switch(type) {
		case 'horizontal': return `background: linear-gradient(90deg, ${color1}, ${color2})`;
		case 'vertical': return `background: linear-gradient(180deg, ${color1}, ${color2})`;
		case 'radial': return `background: radial-gradient(circle, ${color1}, ${color2})`;
		case 'diagonal': return `background: linear-gradient(135deg, ${color1}, ${color2})`;
		default: return `background-color: ${color1}`;
	}
}

// Helper to escape HTML
function escapeHtml(str) {
	const div = document.createElement('div');
	div.textContent = str;
	return div.innerHTML;
}

// Copy permalink for a specific user template
function copyTemplatePermalink(btn, templateId) {
	const templates = getUserTemplates();
	const template = templates.find(t => t.id === templateId);
	if(!template) return;
	
	// Temporarily apply settings to generate permalink
	const settings = {...template.settings}; // Clone to avoid mutation
	const hasAnyCustom = template.hasCustomBackgroundImage || template.hasCustomIconImage || template.hasCustomImage;
	if(hasAnyCustom) {
		settings._hasCustomImage = true;
	}
	
	const jsonStr = JSON.stringify(settings);
	const encoded = btoa(encodeURIComponent(jsonStr));
	const permalink = window.location.origin + window.location.pathname + '#template=' + encoded;
	
	navigator.clipboard.writeText(permalink).then(() => {
		// Show visual feedback on button
		if(btn) {
			const icon = btn.querySelector('.material-symbols-outlined');
			const originalIcon = icon?.textContent;
			const originalTooltip = btn.dataset.tooltip;
			
			btn.classList.add('copied');
			btn.classList.add('tooltip-locked');
			btn.dataset.tooltip = 'Copied!';
			if(icon) icon.textContent = 'check';
			
			// Show the "Copied!" tooltip
			showTooltip(btn, 'Copied!');
			
			setTimeout(() => {
				btn.classList.remove('copied');
				btn.classList.remove('tooltip-locked');
				btn.dataset.tooltip = originalTooltip;
				if(icon) icon.textContent = originalIcon;
				hideTooltip();
			}, 1500);
		}
		trackEvent('Template', 'Permalink Copied', 'saved-template');
	}).catch(err => {
		prompt('Copy this link:', permalink);
	});
}

// Update user template count badge
function updateUserTemplateCount() {
	const countEl = document.getElementById('userTemplateCount');
	if(countEl) {
		const count = getUserTemplates().length;
		countEl.textContent = count;
	}
}

// Initialize templates feature
function initTemplates() {
	renderDefaultTemplates();
	renderUserTemplates();
	updateUserTemplateCount();
	
	// Check for template in URL (after a small delay to let controls initialize)
	setTimeout(() => {
		loadTemplateFromURL();
	}, 100);
	
	// Handle Enter key in modal
	document.getElementById('templateNameInput')?.addEventListener('keydown', (e) => {
		if(e.key === 'Enter') {
			saveTemplate();
		}
	});
	
	// Close modal on outside click
	document.getElementById('saveTemplateModal')?.addEventListener('click', (e) => {
		if(e.target.classList.contains('modal-overlay')) {
			closeSaveTemplateModal();
		}
	});
	
	// Close modal on Escape key
	document.addEventListener('keydown', (e) => {
		if(e.key === 'Escape') {
			closeSaveTemplateModal();
		}
	});
}

// ========================================
// END TEMPLATES FEATURE
// ========================================

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

	const textColour = document.getElementById('textColourControl').value;
	
	switch(textShadow) {
		case 'none':
			buttonText.style.textShadow = 'none';
			break;
		case 'shadow':
			buttonText.style.textShadow = '.025em .025em .05em rgba(0,0,0,0.35)';
			break;
		case 'glow':
			buttonText.style.textShadow = `0 0 6px ${textColour}80, 0 0 12px ${textColour}50`;
			break;
		case 'outline':
			buttonText.style.textShadow = '-1px -1px 0 rgba(0,0,0,0.5), 1px -1px 0 rgba(0,0,0,0.5), -1px 1px 0 rgba(0,0,0,0.5), 1px 1px 0 rgba(0,0,0,0.5)';
			break;
	}
	localStorage.setItem('textShadow', textShadow);
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
	const shadow = document.getElementById('iconShadowControl')?.value || 'none';
	const buttonIconInner = document.getElementById('buttonIconInner');
	const iconColour = document.getElementById('iconColourControl')?.value || '#ffffff';
	
	// Update opacity display
	document.getElementById('iconOpacityValue').textContent = Math.round(opacity * 100) + '%';
	
	// Apply opacity
	buttonIconInner.style.opacity = opacity;
	
	// Apply icon shadow/glow effect using filter for Material icons
	switch(shadow) {
		case 'none':
			buttonIconInner.style.filter = 'none';
			break;
		case 'shadow':
			buttonIconInner.style.filter = 'drop-shadow(2px 2px 3px rgba(0,0,0,0.5))';
			break;
		case 'glow':
			buttonIconInner.style.filter = `drop-shadow(0 0 5px ${iconColour}80) drop-shadow(0 0 10px ${iconColour}50)`;
			break;
	}
	
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
	localStorage.setItem('iconShadow', shadow);
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
		badgeElement.style.top = position.includes('top') ? '20px' : 'auto';
		badgeElement.style.bottom = position.includes('bottom') ? '20px' : 'auto';
		badgeElement.style.left = position.includes('left') ? '20px' : 'auto';
		badgeElement.style.right = position.includes('right') ? '20px' : 'auto';
	}
	
	localStorage.setItem('badge', badge);
	localStorage.setItem('badgePosition', position);
}

// Background controls
function controlBackgroundStyle() {
	const backgroundStyle = document.getElementById('backgroundStyleControl');
	const buttonBackground = document.getElementById('buttonBackground');
	localStorage.setItem('backgroundStyle', backgroundStyle.value);
	
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
					gradientCSS = `linear-gradient(90deg, ${colour1}, ${colour2})`;
					break;
				case 'vertical':
					gradientCSS = `linear-gradient(180deg, ${colour1}, ${colour2})`;
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
			break;
	}
	
	// Show/hide dark overlay options based on background type
	const overlayOptions = document.getElementById('backgroundOverlayOptions');
	if(overlayOptions) {
		overlayOptions.style.display = backgroundStyle.value === 'image' ? 'block' : 'none';
	}
	
	// Update GIF note based on current selections (background style may have changed)
	updateGifExportNote();
	
	// Apply dark overlay
	controlBackgroundOverlay();
}

// Background dark overlay control
function controlBackgroundOverlay() {
	const overlayControl = document.getElementById('backgroundOverlayControl');
	const overlayValue = document.getElementById('backgroundOverlayValue');
	const darkOverlay = document.getElementById('backgroundDarkOverlay');
	
	if(!overlayControl) return;
	
	const opacity = parseFloat(overlayControl.value);
	localStorage.setItem('backgroundOverlay', opacity);
	
	// Update value display
	if(overlayValue) {
		overlayValue.textContent = Math.round(opacity * 100) + '%';
	}
	
	// Update overlay element
	if(darkOverlay) {
		darkOverlay.style.opacity = opacity;
	}
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
	document.querySelectorAll('.charIconOptions, .uploadIconOptions, .mdIconOptions, .urlIconOptions').forEach(el => {
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
			
		case 'url':
			document.querySelectorAll('.urlIconOptions').forEach(el => el.style.display = 'block');
			// Also show the effects options for URL icons
			document.querySelectorAll('.charIconOptions.uploadIconOptions.mdIconOptions').forEach(el => el.style.display = 'block');
			buttonIcon.style.display = 'flex';
			buttonIconInner.style.height = iconSize.value;
			
			const iconUrl = document.getElementById('iconUrlControl').value;
			localStorage.setItem('iconUrl', iconUrl);
			
			if(iconUrl) {
				buttonIconInner.innerHTML = `<img src="${iconUrl}">`;
				
				// Assume GIFs from URL are animated
				if(iconUrl.toLowerCase().includes('.gif')) {
					iconGif = { hasAnimated: true, data: null, file: null, url: iconUrl };
				} else {
					iconGif = { hasAnimated: false, data: null, file: null };
				}
				updateGifExportNote();
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
	
	// Preserve user templates before clearing
	const savedTemplates = localStorage.getItem('buttonDesigner_templates');
	
	// Clear all localStorage
	localStorage.clear();
	
	// Restore user templates
	if(savedTemplates) {
		localStorage.setItem('buttonDesigner_templates', savedTemplates);
	}
	
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
		'backgroundOverlay',
		'overlay',
		'textShadow',
		'iconSize',
		'iconPosition',
		'iconColour',
		'iconText',
		'iconUrl',
		'iconType',
		'iconOpacity',
		'iconRotation',
		'iconFlip',
		'iconShadow',
		'badge',
		'badgePosition'
	];
	
	// Set defaults if not present
	if(!localStorage.getItem('iconMd')) {
		localStorage.setItem('iconMd', 'radio_button_checked');
	}
	
	// Restore saved values (use !== null to allow empty strings)
	controls.forEach(item => {
		const el = document.getElementById(item + 'Control');
		const saved = localStorage.getItem(item);
		if(el && saved !== null) {
			el.value = saved;
		}
	});
	
	// Generate the icon grid
	generateIconGrid();
	
	// Initialize templates feature
	initTemplates();
	
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
	
	// Initialize Choices.js dropdowns and store instances globally
	window.choicesInstances = {};
	
	const defaultChoices = document.querySelectorAll('[default-choices]');
	defaultChoices.forEach(currentValue => {
		const instance = new Choices(currentValue, {
			searchEnabled: false,
			shouldSort: false,
			allowHTML: true
		});
		if(currentValue.id) {
			window.choicesInstances[currentValue.id] = instance;
		}
	});
	
	const searchChoices = document.querySelectorAll('[search-choices]');
	searchChoices.forEach(currentValue => {
		const instance = new Choices(currentValue, {
			searchEnabled: true,
			allowHTML: true
		});
		if(currentValue.id) {
			window.choicesInstances[currentValue.id] = instance;
		}
	});
	
	// Font preview in dropdown
	const fontControl = document.getElementById('textFontControl');
	if(fontControl) {
		fontControl.addEventListener('showDropdown', updateFontPreviews, false);
		fontControl.addEventListener('search', updateFontPreviews, false);
	}
	
	// Initialize tooltip system for elements with data-tooltip
	initTooltipSystem();
	
	// Enable event tracking after a short delay to ensure Choices.js is fully initialized
	// and any programmatic change events have fired
	setTimeout(() => {
		isInitializing = false;
		console.log('Event tracking enabled');
	}, 500);
	
	console.log('Button Designer initialized');
}

// Tooltip system - creates tooltips appended to body to avoid overflow clipping
let activeTooltip = null;

function showTooltip(element, text) {
	hideTooltip(); // Remove any existing tooltip
	
	const tooltip = document.createElement('div');
	tooltip.className = 'global-tooltip';
	tooltip.textContent = text;
	document.body.appendChild(tooltip);
	
	const rect = element.getBoundingClientRect();
	tooltip.style.left = (rect.left + rect.width / 2) + 'px';
	tooltip.style.top = (rect.top - 8) + 'px';
	
	// Force reflow then show
	tooltip.offsetHeight;
	tooltip.classList.add('visible');
	
	activeTooltip = tooltip;
	return tooltip;
}

function hideTooltip() {
	if(activeTooltip) {
		activeTooltip.remove();
		activeTooltip = null;
	}
}

function initTooltipSystem() {
	// Handle hover tooltips for elements with data-tooltip attribute
	document.addEventListener('mouseenter', (e) => {
		const element = e.target.closest('[data-tooltip]');
		if(element) {
			showTooltip(element, element.dataset.tooltip);
		}
	}, true);
	
	document.addEventListener('mouseleave', (e) => {
		const element = e.target.closest('[data-tooltip]');
		if(element && !element.classList.contains('tooltip-locked')) {
			hideTooltip();
		}
	}, true);
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
	
	// Gather icon details for tracking
	const iconType = document.getElementById('iconTypeControl')?.value || 'none';
	const backgroundStyle = document.getElementById('backgroundStyleControl')?.value || 'solid';
	const hasText = document.getElementById('textTextControl')?.value ? 'yes' : 'no';
	const hasIcon = iconType !== 'none' ? 'yes' : 'no';
	const materialIcon = iconType === 'md' ? (localStorage.getItem('iconMd') || 'none') : 'n/a';
	
	// Check if we should export as animated GIF based on current selections
	const activeGif = getActiveAnimatedGif();
	const format = activeGif ? 'GIF' : 'PNG';
	
	// Track download with comprehensive details
	if (typeof _paq !== 'undefined') {
		_paq.push(['trackEvent', 'Icon', 'Downloaded', `${format}|${exportSize}px|bg:${backgroundStyle}|text:${hasText}|icon:${hasIcon}|type:${iconType}|md:${materialIcon}`]);
	}
	
	if(activeGif) {
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
		
		const link = document.createElement('a');
		link.download = `${filename}.png`;
		link.href = dataUrl;
		link.click();
	} catch(error) {
		console.error('Export error:', error);
		alert('There was an error exporting the button. Please try again.');
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
}
