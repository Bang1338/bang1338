// Put this in the console
cc.font = cc.font.replace((index["metadata"]["font_size"] * 2) + "px", (index["metadata"]["font_size"] * 3) + "px");
cc.fontTitle = cc.fontTitle.replace(index["metadata"]["font_size"] + "px", "48px");
index["metadata"]["font_size"] *= 9999;