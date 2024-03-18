export enum ButtonVariant {
    Small = 'small',
    Default = 'default',
    Large = 'large'
}

export enum ButtonTarget {
    Blank = '_blank',	        // Opens the linked document in a new window or tab
    Self = '_self',	        // Opens the linked document in the same frame as it was clicked (this is default)
    Parent = '_parent',	    // Opens the linked document in the parent frame
    Top = '_top',	            // Opens the linked document in the full body of the window
    Framename = 'framename',	// Opens the linked document in the named iframe
}