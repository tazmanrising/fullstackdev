﻿IF EXISTS(SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'ContactTypes') TRUNCATE TABLE dbo.[ContactTypes];
IF EXISTS(SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'SubCategories') TRUNCATE TABLE dbo.[SubCategories];
IF EXISTS(SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Categories') TRUNCATE TABLE dbo.[Categories];
IF EXISTS(SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'CustomerTypes') TRUNCATE TABLE dbo.[CustomerTypes];
IF EXISTS(SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'CsrInteractions') TRUNCATE TABLE dbo.[CsrInteractions];